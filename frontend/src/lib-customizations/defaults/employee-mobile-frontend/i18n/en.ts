// SPDX-FileCopyrightText: 2017-2026 City of Espoo
//
// SPDX-License-Identifier: LGPL-2.1-or-later

import components from '../../components/i18n/en'

import type { fi } from './fi'

export const en: typeof fi = {
  common: {
    yesIDo: 'Yes',
    noIDoNot: 'No',
    loadingFailed: 'Data retrieval failed',
    noAccess: 'Rights are missing',
    endpointDisabled:
      'eVaka is undergoing a partial maintenance outage. Some functions are currently unavailable. Please try again after a while.',
    add: 'Add',
    cancel: 'Cancel',
    confirm: 'Confirm',
    sort: 'Sort',
    all: 'All',
    shiftCare: 'Shift care',
    statuses: {
      active: 'Active',
      coming: 'Upcoming',
      completed: 'Ended',
      conflict: 'Conflict'
    },
    types: {
      CLUB: 'Club',
      FAMILY: 'Family day care',
      GROUP_FAMILY: 'Group family daycare',
      CENTRE: 'Daycare center',
      PRESCHOOL: 'Preschool education',
      DAYCARE: 'Early childhood education',
      PRESCHOOL_DAYCARE: 'Connected early childhood education',
      PREPARATORY_EDUCATION: 'Preparatory preschool education',
      PREPARATORY_DAYCARE: 'Connected early childhood education',
      DAYCARE_5YO_FREE: '5 years of free early childhood education',
      DAYCARE_5YO_PAID: 'Early childhood education (paid)'
    },
    placement: {
      CLUB: 'Club',
      DAYCARE: 'Early childhood education',
      DAYCARE_PART_TIME: 'Part-time early childhood education',
      DAYCARE_FIVE_YEAR_OLDS: 'Early childhood education for 5-year-olds',
      DAYCARE_PART_TIME_FIVE_YEAR_OLDS:
        'Part-time early childhood education for 5-year-olds',
      PRESCHOOL: 'Preschool education',
      PRESCHOOL_DAYCARE: 'Connected early childhood education',
      PRESCHOOL_DAYCARE_ONLY: 'Connected only',
      PRESCHOOL_CLUB: 'Preschool club',
      PREPARATORY: 'Preparatory education',
      PREPARATORY_DAYCARE: 'Preparatory education',
      PREPARATORY_DAYCARE_ONLY: 'Connected only',
      TEMPORARY_DAYCARE: 'Temporary',
      TEMPORARY_DAYCARE_PART_DAY: 'Temporary part-time',
      SCHOOL_SHIFT_CARE: 'Daycare for school children'
    },
    code: 'Code',
    children: 'Children',
    name: 'Name',
    staff: 'Staff',
    messages: 'Messages',
    settings: 'Settings',
    back: 'Back',
    return: 'Go back',
    close: 'Close',
    open: 'Open',
    hours: 'Hours',
    remove: 'Remove',
    doNotRemove: 'Do not remove',
    clear: 'Clear',
    edit: 'Edit',
    save: 'Save',
    saveChanges: 'Save the changes',
    saving: 'Saving',
    saved: 'Saved',
    search: 'Search',
    noResults: 'No search results',
    doNotSave: 'Do not save',
    starts: 'Starts',
    ends: 'Ends',
    information: 'Information',
    dailyNotes: 'Notes',
    saveBeforeClosing: 'Save before closing?',
    hourShort: 't',
    minuteShort: 'min',
    week: 'Week',
    yearsShort: 'year',
    errors: {
      minutes: 'A maximum of 59 minutes'
    },
    child: 'Child',
    group: 'Group',
    yesterday: 'yesterday',
    validation: {
      dateLte: (date: string) => `Must be ${date} or earlier`,
      dateBetween: (start: string, end: string) =>
        `Must be between ${start}-${end}`
    },
    nb: 'Note',
    validity: 'Validity',
    lastModified: (dateTime: string) => `Last modified: ${dateTime}`,
    validTo: (date: string) => `Valid until ${date}`,
    lastName: 'Last name',
    firstName: 'First name',
    openExpandingInfo: 'Open the Additional information field'
  },
  systemNotification: {
    title: 'Notice'
  },
  errorPage: {
    reload: 'Please reload the page',
    text: 'We encountered an unexpected problem. The error information has been forwarded.',
    title: 'Something went wrong'
  },
  absences: {
    title: 'Absence entry',
    absenceTypes: {
      OTHER_ABSENCE: 'Absence',
      SICKLEAVE: 'Disease',
      UNKNOWN_ABSENCE: 'Unannounced absence',
      PLANNED_ABSENCE: 'Shift absence',
      TEMPORARY_RELOCATION: 'The child is placed elsewhere',
      PARENTLEAVE: 'Parental leave',
      FORCE_MAJEURE: 'Free day',
      FREE_ABSENCE: 'Unpaid absence',
      UNAUTHORIZED_ABSENCE: 'Unannounced absence from the emergency room',
      NO_ABSENCE: 'No absence'
    },
    careTypes: {
      SCHOOL_SHIFT_CARE: 'Daycare for school children',
      PRESCHOOL: 'Preschool education',
      PRESCHOOL_DAYCARE: 'Connected early childhood education',
      PRESCHOOL_CLUB: 'Preschool club',
      DAYCARE_5YO_FREE: 'Early childhood education for 5-year-olds',
      DAYCARE: 'Early childhood education',
      CLUB: 'Club'
    },
    chooseStartDate: 'Select a future date',
    startBeforeEnd: 'The start must be before the end date.',
    reason: 'Reason for absence',
    fullDayHint: 'An absence entry is made for the whole day',
    confirmDelete: 'Do you want to remove this absence?',
    futureAbsence: 'Future absences',
    laterAbsence: {
      closed: 'Show subsequent absences',
      open: 'Hide subsequent absences'
    }
  },
  attendances: {
    views: {
      TODAY: 'Today',
      NEXT_DAYS: 'The following days'
    },
    types: {
      COMING: 'Upcoming',
      PRESENT: 'In',
      DEPARTED: 'Gone',
      ABSENT: 'Away'
    },
    status: {
      COMING: 'Upcoming',
      PRESENT: 'Arrived',
      DEPARTED: 'Gone',
      ABSENT: 'Away'
    },
    staffTypes: {
      PRESENT: 'On the spot',
      OTHER_WORK: 'A work thing',
      TRAINING: 'Training',
      OVERTIME: 'Overtime',
      JUSTIFIED_CHANGE: 'Justified change',
      SICKNESS: 'Other reason (own)',
      CHILD_SICKNESS: 'Other reason (child)'
    },
    groupSelectError: 'The name of the selected group could not be found',
    actions: {
      multiselect: {
        toggle: 'Register more than one child',
        confirmArrival: (count: number) =>
          `Mark as arrived${
            count > 1 ? `: ${count} children` : count === 1 ? ': 1 child' : ''
          }`,
        confirmDeparture: (count: number) =>
          `Mark as departed${
            count > 1 ? `: ${count} children` : count === 1 ? ': 1 child' : ''
          }`,
        select: 'Select',
        selected: 'Chosen'
      },
      sortType: {
        CHILD_FIRST_NAME: 'Alphabetical order',
        RESERVATION_START_TIME: 'Order of arrival',
        RESERVATION_END_TIME: 'Starting order'
      },
      markAbsent: 'Mark as absent',
      cancelAbsence: 'Cancel absence',
      markPresent: (count: number) =>
        count > 1
          ? `Mark as arrived ${count} children`
          : 'Mark as arrived',
      markDeparted: 'Mark as departed',
      returnToComing: 'Return to upcoming',
      returnToPresent: 'Return to present',
      or: 'or',
      returnToPresentNoTimeNeeded:
        'Return as present without a new arrival time',
      markAbsentBeforehand: 'Future absences',
      markReservations: 'Future bookings and absences',
      confirmedRangeReservations: {
        markReservations: 'Edit reservations',
        markAbsentBeforehand: 'Mark absence'
      }
    },
    validationErrors: {
      required: 'Obligatory',
      timeFormat: 'Check',
      overlap: 'Overlapping entries'
    },
    timeLabel: 'Entry',
    termBreak: 'No activity today',
    departureTime: 'Departure time',
    arrivalTime: 'Arrival time',
    chooseGroup: 'Select a group',
    chooseGroupInfo: 'Children: Present now/Total in the group',
    searchPlaceholder: 'Search by child\'s name',
    noAbsences: 'No absences',
    removeAbsence: 'Cancel absence',
    timeError: 'Wrong time',
    arrived: 'Arrived',
    departed: 'Lahti',
    noGroup: 'No group',
    serviceTime: {
      reservation: 'Reservation',
      reservations: 'Reservations',
      serviceToday: (start: string, end: string) =>
        `Early childhood education time today ${start}-${end}`,
      serviceTodayShort: (start: string, end: string) =>
        `Reserved ${start}-${end}`,
      noServiceToday: 'No reserved early childhood education time today',
      noServiceTodayShort: 'No appointment today',
      notSet: 'Presence notification is missing',
      notSetShort: 'Notification is missing',
      variableTimes: 'Variable early childhood education period',
      variableTimesShort: 'The appointment time varies',
      present: 'In',
      yesterday: 'yesterday',
      tomorrow: 'tomorrow'
    },
    confirmedDays: {
      noChildren: 'No children',
      tomorrow: 'Tomorrow',
      inOtherUnit: 'In another unit',
      status: {
        ABSENT: 'Away',
        ON_TERM_BREAK: 'No action'
      },
      noHolidayReservation: 'Vacation booking is missing'
    },
    notes: {
      day: 'Day',
      dailyNotes: 'Notes',
      addNew: 'Add new',
      labels: {
        stickyNote: 'Things to note in the coming days',
        note: 'Experienced and learned today',
        feedingNote: 'The child ate today',
        sleepingNote: 'The child slept today',
        reminderNote: 'Things to remember',
        groupNotesHeader: 'Whole group notes'
      },
      sleepingValues: {
        GOOD: 'Very',
        MEDIUM: 'Little',
        NONE: 'Not at all'
      },
      feedingValues: {
        GOOD: 'Very',
        MEDIUM: 'Little',
        NONE: 'Not at all/tasted'
      },
      reminders: {
        DIAPERS: 'More diapers',
        CLOTHES: 'More spare clothes',
        LAUNDRY: 'Laundry in the backpack'
      },
      placeholders: {
        note: 'Games, successes, happy things and things learned today (no health or confidential information).',
        childStickyNote:
          'Note to staff (no health or confidential information).',
        groupNote: 'A note about the entire group',
        reminderNote: 'Other things to remember (e.g. sunscreen)',
        hours: 'hours',
        minutes: 'minutes'
      },
      noNotes: 'No entries for today',
      clearTitle: 'Do you want to clear the entries for this day?',
      confirmTitle: 'Are the entries made before closing saved?',
      closeWithoutSaving: 'Close without saving',
      groupNote: 'Group notes',
      note: 'Experienced and learned today',
      otherThings: 'Other things',
      childStickyNotes: 'Things to note in the coming days'
    },
    absenceTitle: 'Absence markings',
    staff: {
      errors: {
        employeeNotFound: 'No employee found',
        wrongPin: 'Incorrect PIN code'
      },
      previousDays: 'Previous entries',
      nextDays: 'Future work shifts and absences',
      continuationAttendance: '* registration started the previous day',
      editContinuationAttendance: 'Go to edit',
      absent: 'Away',
      externalPerson: 'Another person',
      markExternalPerson: 'Recorded by another person',
      markExternalPersonTitle: 'Log in another employee',
      markArrived: 'Log in to be present',
      markDeparted: 'Log in as absent',
      loginWithPin: 'Log in with a PIN code',
      pinNotSet: 'Set yourself a PIN code',
      pinLocked: 'Change the locked PIN code',
      plannedAttendance: 'Work shift today',
      differenceReason: 'Record the reason if necessary',
      differenceInfo: 'The time differs from your work shift',
      hasFutureAttendance:
        'You have a presence marked for the future, so you cannot register as present.',
      summary: 'Summary',
      plan: 'Shift',
      realization: 'Realization',
      rows: 'Today\'s entries',
      noRows: 'No records',
      open: 'Open',
      validationErrors: {
        required: 'Obligatory',
        timeFormat: 'Check',
        future: 'In the future',
        overlap: 'Overlapping entries',
        dateTooEarly: 'Check',
        dateTooLate: 'Check'
      },
      add: '+ Add a new entry',
      openAttendanceInAnotherUnitWarning: 'Open enrollment',
      openAttendanceInAnotherUnitWarningCont:
        '. The entry must be closed before adding a new one.',
      noPlan: 'No scheduled shift',
      planWarnings: {
        maybeInOtherUnit: 'The shift may be in another unit',
        maybeInOtherGroup: 'The shift can be in another group'
      },
      plansInfo:
        'Only the absences marked in the shift system are shown in the list.',
      staffMemberPlanInfo:
        'Only includes absences planned for the shift system.',
      staffMemberMultipleUnits:
        'The work shifts visible to this person may be in another unit'
    },
    timeDiffTooBigNotification:
      'You can check in +/- 30 minutes from now. Logs can be edited via a desktop browser if necessary.',
    departureCannotBeDoneInFuture:
      'The check-out of the work shift cannot be marked in advance.',
    arrivalIsBeforeDeparture: (departure: string) =>
      `The given time is before the previous departure time ${departure}`,
    departureIsBeforeArrival: (arrival: string) =>
      `The given time is before the latest arrival time ${arrival}`,
    confirmAttendanceChangeCancel:
      'Are you sure you want to cancel the last departure or arrival entry?',
    notOperationalDate:
      'You cannot log in to the unit as present because the unit is closed.'
  },
  childInfo: {
    header: 'Child\'s information',
    personalInfoHeader: 'Child\'s personal information',
    childName: 'Child\'s name',
    preferredName: 'Nickname',
    dateOfBirth: 'Date of birth',
    address: 'Child\'s home address',
    type: 'Investment type',
    otherInfoHeader: 'Other information',
    allergies: 'Allergies',
    diet: 'Diet',
    medication: 'Medication',
    additionalInfo: 'Additional information',
    contactInfoHeader: 'Contact information',
    contact: 'Contact',
    name: 'Name',
    phone: 'Telephone number',
    backupPhone: 'Backup phone number',
    email: 'E-mail address',
    backupPickup: 'Reserve applicant',
    backupPickupName: 'Name of reserve applicant',
    image: {
      modalMenu: {
        title: 'Child\'s profile picture',
        takeImageButton: 'Select an image',
        deleteImageButton: 'Delete the image',
        deleteConfirm: {
          title: 'Are you sure you want to delete the child\'s picture?',
          resolve: 'Delete the image',
          reject: 'Do not remove'
        },
        disclaimer:
          'There is a short delay when saving the image, during which the image is not displayed. The image starts to appear about a minute after recording at the latest.'
      }
    },
    showSensitiveInfo: 'Show sensitive information',
    noGuardians: 'Guardians cannot be reached through eVaka'
  },
  staff: {
    title: 'Number of staff today',
    daycareResponsible: 'Those responsible for education',
    staffOccupancyEffect: 'I am responsible for education',
    other: 'Others (e.g. assistants, students, drafts)',
    cancel: 'Undo editing',
    realizedGroupOccupancy: 'Group usage today',
    realizedUnitOccupancy: 'Unit utilization today',
    notUpdated: 'Information has not been updated',
    updatedToday: 'Information updated today',
    updated: 'Information updated'
  },
  pin: {
    header: 'Unlocking',
    info: 'Enter the PIN code to access the child\'s information',
    selectStaff: 'Select a user',
    staff: 'User',
    noOptions: 'No options',
    pinCode: 'PIN code',
    status: {
      SUCCESS: 'Correct PIN code',
      WRONG_PIN: 'Incorrect PIN code',
      PIN_LOCKED: 'The PIN code is locked',
      NOT_FOUND: 'Unknown user'
    },
    unknownError: 'Unknown error',
    logOut: 'Sign out',
    login: 'Log in',
    loggedIn: 'Logged in'
  },
  messages: {
    tabs: {
      received: 'Arrived',
      sent: 'Sent',
      drafts: 'Sketches'
    },
    inputPlaceholder: 'Write...',
    newMessage: 'New message',
    thread: {
      reply: 'Reply to the message'
    },
    draft: 'Draft',
    draftReply: '- Draft -',
    messageEditor: {
      newMessage: 'New message',
      to: {
        label: 'Recipient',
        placeholder: 'Select a group',
        noOptions: 'No groups'
      },
      type: {
        label: 'Message type',
        message: 'Message',
        bulletin: 'Information (recipient cannot reply)'
      },
      urgent: {
        heading: 'Mark as urgent',
        info: 'Send a message as urgent only if you want the guardian to read it during the working day.',
        label: 'Urgent'
      },
      sender: 'Sender',
      receivers: 'Recipients',
      recipientsPlaceholder: 'Select...',
      starters: 'starting children',
      subject: {
        heading: 'Title',
        placeholder: 'Write...'
      },
      message: {
        heading: 'Message',
        placeholder: 'Message content...'
      },
      deleteDraft: 'Reject draft',
      send: 'Send',
      sending: 'Sending',
      recipientCount: 'Recipients',
      manyRecipientsWarning: {
        title: (count: number) => `The message has ${count} recipients.`,
        text: (count: number) =>
          `This message is about to be sent to ${count} recipients. Are you sure you want to send it?`
      }
    },
    emptyInbox: 'Your inbox is empty',
    noSentMessages: 'No messages sent',
    noDrafts: 'No drafts',
    unreadMessages: 'New messages',
    openPinLock: 'Unlock',
    pinLockInfo:
      'To read the messages, you must unlock with a PIN code. You can only read the messages of your own group.',
    noAccountAccess:
      'Messages cannot be displayed because you are not allowed in the group. Ask your supervisor for permission.',
    noRecipients: 'The recipient cannot be sent a message'
  },
  mobile: {
    landerText1:
      'Welcome to the Espoo early childhood education mobile application!',
    landerText2:
      'To use the application, select \'Add a device\' below and register the mobile device in eVaka on the page of your own unit.',
    actions: {
      ADD_DEVICE: 'Add device',
      START: 'Let\'s get started'
    },
    wizard: {
      text1: 'Enter the 6-character code from eVaka in the field below.',
      text2: 'Enter the confirmation code below in eVaka.',
      title1: 'Implementation of eVaka mobile, phase 1/3',
      title2: 'Implementation of eVaka mobile, phase 2/3',
      title3: 'Welcome to eVaka mobile!',
      text3: 'eVaka mobile is now in use on this device.',
      text4:
        'To protect your children\'s information, remember to set a passcode on the device if you haven\'t already.'
    },
    emptyList: (status: 'COMING' | 'ABSENT' | 'PRESENT' | 'DEPARTED') => {
      const statusText = (() => {
        switch (status) {
          case 'COMING':
            return 'coming ones'
          case 'ABSENT':
            return 'those who are absent'
          case 'PRESENT':
            return 'those present'
          case 'DEPARTED':
            return 'departed'
        }
      })()
      return `No ${statusText} children`
    }
  },
  settings: {
    language: {
      title: 'Language',
      fi: 'Finnish',
      sv: 'Swedish',
      en: 'English'
    },
    notifications: {
      title: 'Notification settings',
      permission: {
        label: 'Announcements',
        enable: 'Enable',
        state: {
          unsupported: 'Notifications are not supported by the phone or browser',
          granted: 'In use',
          prompt: 'Not in use',
          denied: 'Blocked'
        },
        info: {
          unsupported:
            'Notifications do not work on this phone or the version of the browser in use. The problem may be fixed by updating the browser.',
          denied:
            'Notifications are blocked in the phone settings. This can be fixed by changing the notification settings of your phone or browser.'
        }
      },
      categories: {
        label: 'Topics for which a notification is sent to this phone',
        values: {
          RECEIVED_MESSAGE: 'Incoming messages',
          NEW_ABSENCE: 'Children\'s absence records for the current day',
          CALENDAR_EVENT_RESERVATION: 'Booked and canceled chat times'
        }
      },
      groups: {
        label: 'The groups about which the notification is sent'
      }
    }
  },
  childButtons: {
    messages: 'Messages'
  },
  fileUpload: {
    upload: {
      loading: 'Loading...',
      loaded: 'Loaded',
      error: {
        EXTENSION_MISSING: 'The file extension is missing',
        EXTENSION_INVALID: 'Invalid file extension',
        INVALID_CONTENT_TYPE: 'Invalid file format',
        FILE_TOO_LARGE: 'File too large (max. 25 MB)',
        SERVER_ERROR: 'Download failed'
      },
      input: {
        title: 'Add an attachment',
        text: [
          'Click here or drag the attachment into the box one at a time.',
          'Maximum file size: 25 MB.',
          'Allowed file formats:',
          'PDF, JPEG/JPG, PNG and DOC/DOCX'
        ]
      },
      deleteFile: 'Delete the file'
    },
    download: {
      modalHeader: 'File processing is in progress',
      modalMessage:
        'The file cannot be opened right now. Please try again later.',
      modalClose: 'Close'
    }
  },
  units: {
    title: 'Units',
    children: 'Children',
    staff: 'Staff',
    utilization: 'Usage rate',
    description:
      'The number of staff and children in your units and the occupancy rate at the moment.'
  },
  components
}


export default en
