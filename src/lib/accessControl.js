import { supabase } from './supabaseClient'

/**
 * Check if email is a Drexel University email
 * @param {string} email - Email address to check
 * @returns {boolean} - True if email ends with @drexel.edu
 */
export const isDrexelEmail = (email) => {
  return email.toLowerCase().trim().endsWith('@drexel.edu')
}

/**
 * Check if a non-Drexel email has been approved for access
 * @param {string} email - Email address to check
 * @returns {Promise<boolean>} - True if email is approved
 */
export const checkAccessApproval = async (email) => {
  try {
    const { data, error } = await supabase
      .from('access_requests')
      .select('status')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (error) {
      // If no record found, return false
      if (error.code === 'PGRST116') {
        return false
      }
      throw error
    }

    return data?.status === 'approved'
  } catch (error) {
    console.error('Error checking access approval:', error)
    return false
  }
}

/**
 * Submit an access request for a non-Drexel email
 * @param {string} email - Email address requesting access
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const requestAccess = async (email) => {
  try {
    const normalizedEmail = email.toLowerCase().trim()

    // Check if already requested
    const { data: existing } = await supabase
      .from('access_requests')
      .select('status')
      .eq('email', normalizedEmail)
      .single()

    if (existing) {
      if (existing.status === 'approved') {
        return {
          success: false,
          message: 'Your email has already been approved! You can sign up now.'
        }
      }
      if (existing.status === 'pending') {
        return {
          success: false,
          message: 'You have already requested access. We will notify you when approved.'
        }
      }
      if (existing.status === 'rejected') {
        return {
          success: false,
          message: 'Your previous request was not approved. Please contact support.'
        }
      }
    }

    // Insert new access request
    const { error } = await supabase
      .from('access_requests')
      .insert([
        {
          email: normalizedEmail,
          status: 'pending'
        }
      ])

    if (error) throw error

    return {
      success: true,
      message: 'Access request submitted! We will review and notify you soon.'
    }
  } catch (error) {
    console.error('Error requesting access:', error)
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    }
  }
}

/**
 * Validate if user can sign up (Drexel email OR approved non-Drexel email)
 * @param {string} email - Email address to validate
 * @returns {Promise<{canSignUp: boolean, reason: string}>}
 */
export const validateSignUpEligibility = async (email) => {
  const normalizedEmail = email.toLowerCase().trim()

  // Drexel emails can always sign up
  if (isDrexelEmail(normalizedEmail)) {
    return {
      canSignUp: true,
      reason: 'Drexel email - auto-approved'
    }
  }

  // Check if non-Drexel email is approved
  const isApproved = await checkAccessApproval(normalizedEmail)

  if (isApproved) {
    return {
      canSignUp: true,
      reason: 'Access approved'
    }
  }

  return {
    canSignUp: false,
    reason: 'Please request access first or use a Drexel email address'
  }
}