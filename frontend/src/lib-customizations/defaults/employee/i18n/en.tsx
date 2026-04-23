// SPDX-FileCopyrightText: 2017-2022 City of Espoo
//
// SPDX-License-Identifier: LGPL-2.1-or-later

import type { ReactNode } from 'react'
import React from 'react'

import type DateRange from 'lib-common/date-range'
import type FiniteDateRange from 'lib-common/finite-date-range'
import type { InvoiceStatus } from 'lib-common/generated/api-types/invoicing'
import type HelsinkiDateTime from 'lib-common/helsinki-date-time'
import type LocalDate from 'lib-common/local-date'
import { H3 } from 'lib-components/typography'

import components from '../../components/i18n/en'

import type { fi } from './fi'

export const en: typeof fi = {
  titles: {
    defaultTitle: 'Early childhood education',
    login: 'Log in',
    ai: 'AI test',
    applications: 'Applications',
    childInformation: 'Child\'s information',
    employees: 'Users',
    financeBasics: 'Financial payment settings',
    units: 'Units',
    customers: 'Customer information',
    placementPlan: 'Placement plan',
    decision: 'Decision making and sending',
    documentTemplates: 'Document templates',
    feeDecisions: 'Fee decisions',
    feeDecision: 'Fee decision',
    feeDecisionDraft: 'Fee decision draft',
    holidayPeriod: 'Holiday period',
    holidayPeriods: 'Holiday periods',
    holidayAndTermPeriods: 'Holiday periods and operating terms',
    holidayQuestionnaire: 'Holiday questionnaire',
    groupCaretakers: 'Staff requirement in group',
    incomeStatements: 'Income statements',
    valueDecisions: 'Voucher value decisions',
    valueDecision: 'Voucher value decision',
    valueDecisionDraft: 'Voucher value decision draft',
    incomeStatement: 'Income statement form',
    invoices: 'Invoices',
    payments: 'Payments',
    invoice: 'Invoice',
    invoiceDraft: 'Invoice draft',
    reports: 'Reports',
    messages: 'Messages',
    caretakers: 'Staff',
    createUnit: 'Create new unit',
    personProfile: 'Adult details',
    personTimeline: 'Customer timeline',
    personalMobileDevices: 'Personal eVaka mobile',
    preschoolTerm: 'Preschool term',
    preschoolTerms: 'Preschool terms',
    employeePinCode: 'PIN code management',
    preferredFirstName: 'Preferred first name management',
    settings: 'Settings',
    systemNotifications: 'Temporary notification',
    unitFeatures: 'Feature enablement',
    welcomePage: 'Welcome to eVaka',
    clubTerm: 'Club term',
    clubTerms: 'Club terms',
    placementTool: 'Placement optimization tool',
    outOfOffice: 'Out-of-office message'
  },
  common: {
    yes: 'Yes',
    no: 'No',
    and: 'And',
    loadingFailed: 'Data retrieval failed',
    noAccess: 'Rights are missing',
    endpointDisabled:
      'eVaka is undergoing a partial maintenance outage. Some functions are currently unavailable. Please try again after a while.',
    edit: 'Edit',
    add: 'Add',
    addNew: 'Add new',
    clear: 'Clear',
    create: 'Create',
    remove: 'Remove',
    doNotRemove: 'Do not remove',
    archive: 'Archive',
    download: 'Download',
    cancel: 'Cancel',
    goBack: 'Go back',
    leavePage: 'Leave page',
    confirm: 'Confirm',
    period: 'For the period',
    search: 'Search',
    select: 'Select',
    send: 'Send',
    save: 'Save',
    saving: 'Saving',
    saved: 'Saved',
    unknown: 'Unknown',
    all: 'All',
    continue: 'Continue',
    statuses: {
      active: 'Active',
      coming: 'Upcoming',
      completed: 'Ended',
      conflict: 'Conflict',
      guarantee: 'Guaranteed placement'
    },
    careTypeLabels: {
      club: 'Club',
      preschool: 'Preschool education',
      daycare: 'Early childhood education',
      daycare5yo: 'Early childhood education',
      preparatory: 'Preparatory education',
      'backup-care': 'Backup placement',
      temporary: 'Temporary',
      'school-shift-care': 'Daycare for school children',
      'connected-daycare': 'Related'
    },
    careTypeLabelsShort: {
      club: 'Club',
      preschool: 'Preschool education',
      daycare: 'Barb',
      daycare5yo: 'Barb',
      preparatory: 'Preparatory education',
      'backup-care': 'Backup placement',
      temporary: 'Temporary',
      'school-shift-care': 'School shifts',
      'connected-daycare': 'Related'
    },
    providerType: {
      MUNICIPAL: 'Municipal',
      PURCHASED: 'Purchase service',
      PRIVATE: 'Private',
      MUNICIPAL_SCHOOL: 'Finnish language teaching activity (SUKO)',
      PRIVATE_SERVICE_VOUCHER: 'Private (service voucher)',
      EXTERNAL_PURCHASED: 'Purchase service (other)'
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
    form: {
      address: 'Address',
      addressRestricted: 'The address is not available due to a security ban',
      age: 'Age',
      backupPhone: 'Backup phone number',
      birthday: 'Date of birth',
      dateOfDeath: 'Dead',
      email: 'E-mail',
      endDate: 'Finishing',
      firstName: 'First name',
      firstNames: 'First names',
      invoiceRecipient: 'Bill recipient',
      invoicingAddress: 'Billing address',
      lastModified: 'Last modified',
      lastModifiedBy: (name: string) => `Muokkaaja: ${name}`,
      lastName: 'Last name',
      name: 'Name',
      ophPersonOid: 'OPH person OID',
      phone: 'Telephone number',
      postOffice: 'Post office',
      postalCode: 'Postcode',
      municipalityOfResidence: 'Home county',
      range: 'For the period',
      socialSecurityNumber: 'Hetu',
      startDate: 'Starting with',
      streetAddress: 'Street address',
      updatedFromVtj: 'Information updated from VTJ'
    },
    expandableList: {
      others: 'change'
    },
    resultCount: (count: number) =>
      count > 0 ? `Hakutuloksia: ${count}` : 'No search results',
    ok: 'Clear!',
    tryAgain: 'Please try again',
    checkDates: 'Check the dates',
    multipleChildren: 'Several children',
    today: 'Today',
    error: {
      unknown: 'Oops, something went wrong!',
      forbidden: 'Permissions for this function are missing',
      saveFailed: 'Failed to save changes, please try again.',
      minutes: 'A maximum of 59 minutes'
    },
    days: 'days',
    day: 'day',
    loading: 'Loading...',
    noResults: 'No search results',
    noFirstName: 'Missing first name',
    noLastName: 'Surname is missing',
    noName: 'The name is missing',
    date: 'Date',
    month: 'Month',
    year: 'Year',
    code: 'Code',
    ready: 'Ready',
    page: 'Page',
    group: 'Group',
    openExpandingInfo: 'Open the Additional information field',
    datetime: {
      weekdaysShort: ['Mon', 'Tuesday', 'Wed', 'Thu', 'Fri', 'La', 'Sun'],
      week: 'Week',
      weekShort: 'Week',
      monthShort: 'Month',
      weekdays: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    },
    nb: 'Note',
    lastModified: (dateTime: string) => `Last modified: ${dateTime}`,
    validTo: (date: string) => `Voimassa ${date} saakka`,
    closeModal: 'Close the pop-up window',
    datePicker: {
      previousMonthLabel: 'Last month',
      nextMonthLabel: 'Next month',
      calendarLabel: 'Calendar'
    },
    close: 'Close',
    open: 'Open',
    copy: 'Copy',
    startDate: 'Start date',
    endDate: 'End date',
    retroactiveConfirmation: {
      title:
        'You are making a change that may cause retroactive changes to customer payments.',
      checkboxLabel: 'I understand, I am in contact with the invoicing team.*'
    },
    userTypes: {
      SYSTEM: 'system',
      CITIZEN: 'municipal citizen',
      EMPLOYEE: 'worker',
      MOBILE_DEVICE: 'mobile device',
      UNKNOWN: 'unknown'
    },
    showMore: 'Show more',
    showLess: 'Hide'
  },
  header: {
    applications: 'Applications',
    units: 'Units',
    search: 'Customer information',
    finance: 'Economic',
    invoices: 'Invoices',
    payments: 'Payments',
    incomeStatements: 'Income statements',
    feeDecisions: 'Fee decisions',
    valueDecisions: 'Voucher value decisions',
    reports: 'Reports',
    messages: 'Messages',
    logout: 'Sign out'
  },
  footer: {
    cityLabel: 'The city of Espoo',
    linkLabel: 'Early childhood education in Espoo',
    linkHref: 'https://www.espoo.fi/fi/kasvatus-ja-opetus/varhaiskasvatus'
  },
  language: {
    title: 'Language',
    fi: 'Finnish',
    sv: 'Swedish',
    en: 'English'
  },
  errorPage: {
    reload: 'Please reload the page',
    text: 'We encountered an unexpected problem. The error information has been forwarded.',
    title: 'Something went wrong'
  },
  validationError: {
    mandatoryField: 'Mandatory information',
    endDateIsMandatoryField: 'The end date is mandatory information',
    dateRange: 'The date is invalid',
    invertedDateRange:
      'The start date must not be after the end date',
    existingDateRangeError:
      'Dates must not overlap with periods already created',
    coveringDateRangeError:
      'The date range must not completely cover an already existing one',
    email: 'The email is in the wrong format',
    phone: 'The phone number is in the wrong format',
    ssn: 'The ID is in the wrong format',
    time: 'The time is in the wrong format',
    cents: 'The euro amount is in the wrong format',
    decimal: 'The decimal number is in the wrong format',
    startDateNotOnTerm: 'The start date must refer to a season'
  },
  login: {
    title: 'Early childhood education',
    subtitle: 'Customer information and units',
    systemNotification: 'Important notice',
    login: 'Log in',
    loginAD: 'Espoo AD',
    loginEvaka: 'Service provider',
    error: {
      noRole: 'You do not have the required role',
      default: 'Something went wrong'
    }
  },
  applications: {
    show: 'Show',
    asList: 'As a list',
    asDesktop: 'As a desk',
    list: {
      addNote: 'Add a note',
      areaPlaceholder: 'Select an area',
      basis: 'Basic',
      currentUnit: 'Now',
      dueDate: 'To be processed',
      name: 'Child\'s name/age',
      noResults: 'No search results',
      note: 'Note',
      paper: 'Paper application',
      resultCount: 'Search results',
      serviceWorkerNote: 'Attention of service management',
      siblingBasis: 'Sibling basis',
      siblingNotFound: 'Sibling information was not found',
      noValidPlacement: 'No valid ranking',
      startDate: 'Start',
      status: 'Status',
      statusLastModified: 'Status last edited',
      subtype: 'Part / Size',
      title: 'Applications',
      transfer: 'Transfer application',
      transferFilter: {
        title: 'Transfer applications',
        transferOnly: 'Show transfer requests only',
        hideTransfer: 'Hide transfer requests',
        all: 'No limit'
      },
      type: 'Search type',
      unit: 'Unit',
      voucherFilter: {
        title: 'Service voucher applications',
        firstChoice: 'Show if 1. as search request',
        allVoucher: 'Show all service voucher applications',
        hideVoucher: 'Hide service voucher applications',
        noFilter: 'No limit'
      }
    },
    placementDesktop: {
      warnings: {
        tooManyApplicationsTitle: (count: number) =>
          `Liikaa hakemuksia (${count})`,
        tooManyApplicationsMessage:
          'Refine the application criteria so that there are no more than 50 applications.'
      },
      occupancyPeriod: 'Show the maximum filling levels for the time interval',
      shownUnitsCount: 'Units to display',
      addShownUnit: 'Add unit to display...',
      applicationsCount: 'Applications',
      preferences: 'Application wishes',
      createPlacementDraft: 'Figure it out',
      createPlacementDraftToOtherUnit: 'Impersonate another unit...',
      cancelPlacementDraft: 'Cancel the outline',
      cancelPlacementDraftConfirmationTitle:
        'Are you sure you want to cancel the investment form?',
      cancelPlacementDraftConfirmationMessage:
        'The related application is not included in the currently displayed search results.',
      show: 'Show',
      showUnit: 'Show unit',
      hideUnit: 'Hide the unit',
      other: 'Other',
      addToOtherUnit: 'Impersonate the rest of the unit',
      birthDate: 'Date of birth',
      dueDate: 'Legality',
      preferredStartDate: 'A welcome start',
      transfer: 'Move',
      toPlacementPlan: 'Invest',
      checkApplication: 'Check',
      occupancies: 'Filling levels',
      occupancyTypes: {
        confirmed: 'Confirmed',
        planned: 'Scheduled',
        draft: 'Characterized'
      },
      openGraph: 'Open the degree of filling graph',
      placementDrafts: 'Investment figures',
      notInSearchResults: 'The application is not included in the search results',
      draftedBy: 'Characterized'
    },
    actions: {
      moveToWaitingPlacement: 'Move to investable',
      returnToSent: 'Return to inbox',
      cancelApplication: 'Remove from processing',
      cancelApplicationConfirm:
        'Are you sure you want to remove the application from processing?',
      cancelApplicationConfidentiality: 'Is the application confidential?',
      check: 'Check',
      setVerified: 'Mark as reviewed',
      createPlacementPlan: 'Invest',
      cancelPlacementPlan: 'Return to investable',
      editDecisions: 'Decisions',
      confirmPlacementWithoutDecision: 'Confirm without decision',
      sendDecisionsWithoutProposal: 'Submit the decisions',
      sendPlacementProposal: 'Send an investment proposal',
      withdrawPlacementProposal: 'Cancel the investment proposal',
      confirmDecisionMailed: 'Mark as posted',
      checked: (count: number) =>
        count === 1 ? `${count} hakemus valittu` : `${count} hakemusta valittu`
    },
    distinctiveDetails: {
      SECONDARY: 'Also show if the unit has been applied for as a 2nd or 3rd wish'
    },
    basisTooltip: {
      ADDITIONAL_INFO: 'Text in the additional information field',
      SIBLING_BASIS: 'Uses the sibling basis',
      ASSISTANCE_NEED: 'The need for support',
      CLUB_CARE: 'The club place that was in the previous operating season',
      CONTINUATION: 'Continuous child',
      DAYCARE: 'Has announced that he will give up the early childhood education place',
      EXTENDED_CARE: 'Shift work',
      DUPLICATE_APPLICATION: 'Double application',
      URGENT: 'Urgent application',
      HAS_ATTACHMENTS: 'In the application, an attachment'
    },
    types: {
      PRESCHOOL: 'Preschool application',
      DAYCARE: 'Early childhood education application',
      CLUB: 'Club application',
      PRESCHOOL_ONLY: 'Preschool education',
      PRESCHOOL_DAYCARE: 'Preschool & related',
      PRESCHOOL_CLUB: 'Preschool club',
      PREPARATORY_ONLY: 'Preparatory education',
      PREPARATORY_DAYCARE: 'Prep & related',
      DAYCARE_ONLY: 'Later searched related',
      ALL: 'All'
    },
    searchPlaceholder: 'Search by name, nickname or address',
    basis: 'Notes',
    distinctions: 'Advanced search',
    secondaryTooltip: 'First, choose a place of business'
  },
  application: {
    tabTitle: 'Application',
    messageSubject: (date: string, name: string) => `Hakemus ${date}: ${name}`,
    types: {
      PRESCHOOL: 'Preschool application',
      DAYCARE: 'Early childhood education application',
      CLUB: 'Club application',
      PRESCHOOL_DAYCARE: 'Connected early childhood education',
      PREPARATORY_EDUCATION: 'Preparatory teaching',
      ALL: 'All'
    },
    statuses: {
      CREATED: 'Draft',
      SENT: 'Arrived',
      WAITING_PLACEMENT: 'Awaiting placement',
      WAITING_DECISION: 'Preparation of the decision',
      WAITING_UNIT_CONFIRMATION: 'To be reviewed by the manager',
      WAITING_MAILING: 'Awaiting mailing',
      WAITING_CONFIRMATION: 'To be confirmed by the guardian',
      ACTIVE: 'Place received',
      REJECTED: 'Place abandoned',
      CANCELLED: 'Removed from processing',
      ALL: 'All'
    },
    selectConfidentialityLabel: 'Is the application confidential?',
    selectAll: 'Select all',
    unselectAll: 'Clear the selections',
    transfer: 'Transfer application',
    origins: {
      ELECTRONIC: 'Electronic application',
      PAPER: 'Paper application'
    },
    person: {
      name: 'Name',
      ssn: 'Personal identification number',
      dob: 'Date of birth',
      address: 'Address',
      restricted: 'Security ban in effect',
      hasFutureAddress:
        'The address in the population register has changed / is changing',
      futureAddress: 'Incoming address',
      movingDate: 'Moving day',
      nationality: 'Citizenship',
      language: 'Language',
      phone: 'Telephone number',
      email: 'E-mail',
      agreementStatus: 'Agreed together',
      otherGuardianAgreementStatuses: {
        AGREED: 'Agreed together',
        NOT_AGREED: 'Not agreed together',
        RIGHT_TO_GET_NOTIFIED: 'Access to information only',
        AUTOMATED: 'Automatic decision',
        NOT_SET: 'The guardians live at the same address'
      },
      noOtherChildren: 'No other children',
      applicantDead: 'Applicant deceased'
    },
    serviceNeed: {
      title: 'Need for service',
      startDate: 'Desired start date',
      connectedLabel: 'Connected early childhood education',
      connectedValue: 'I am also applying for related early childhood education',
      connectedDaycarePreferredStartDateLabel:
        'Desired start date of related early childhood education',
      connectedDaycareServiceNeedOptionLabel: 'The need for complementary services',
      dailyTime: 'Daily attendance time',
      startTimePlaceholder: '08:00',
      endTimePlaceholder: '16:00',
      shiftCareLabel: 'Evening and day care',
      shiftCareNeeded: 'Evening and day care is needed',
      shiftCareWithAttachments: 'Evening and day care is needed, attachments:',
      urgentLabel: 'Urgent application',
      notUrgent: 'No',
      isUrgent: 'It is urgent',
      isUrgentWithAttachments: 'It is urgent, attachments:',
      missingAttachment: 'The attachment is missing',
      preparatoryLabel: 'Preparatory teaching',
      preparatoryValue: 'I am also applying for preparatory teaching',
      assistanceLabel: 'The need for support',
      assistanceValue: 'The child needs support',
      assistanceDesc: 'Description of the need for support',
      partTime: 'Part-time',
      fullTime: 'Full time',
      partTimeLabel: 'Part-time or Full-time',
      error: {
        getServiceNeedOptions: 'Search for service needs failed!'
      }
    },
    clubDetails: {
      wasOnClubCareLabel: 'In the club in the previous season',
      wasOnClubCareValue:
        'The child has been in the club during the previous operating season',
      wasOnDaycareLabel: 'In early childhood education before the club',
      wasOnDaycareValue:
        'The child is in early childhood education before the desired start date of the club'
    },
    preferences: {
      title: 'Application request',
      preferredUnits: 'Application wishes',
      moveUp: 'Move up',
      moveDown: 'Move down',
      missingPreferredUnits: 'Choose at least one application request',
      unitMismatch: 'The application wishes do not correspond to the applied units',
      unitsOnMap: 'Units on the map',
      siblingBasisLabel: 'Sibling basis',
      siblingBasisValue: 'I am applying for a place on the basis of siblings',
      siblingName: 'Sibling\'s name',
      siblingSsn: 'Sibling\'s social security number',
      siblingUnit: 'Sibling unit'
    },
    child: {
      title: 'Child\'s information'
    },
    guardians: {
      title: 'Applicant information',
      appliedGuardian: 'Applicant information',
      secondGuardian: {
        title: 'Details of the other notified adult',
        checkboxLabel: 'The applicant has provided the information of another guardian',
        exists: 'The child has another guardian',
        sameAddress: 'The other guardian lives at the same address',
        separated: 'The other guardian lives at a different address',
        agreed: 'The application has been agreed upon together',
        noVtjGuardian: 'According to Vtj, the child does not have another guardian'
      },
      vtjGuardian: 'Information of the second guardian according to VTJ'
    },
    otherPeople: {
      title: 'Other persons',
      adult: 'Other adult',
      spouse: 'The applicant lives together with another married or common-law partner',
      children: 'Other children living in the same household',
      addChild: 'Add a child'
    },
    additionalInfo: {
      title: 'Additional information',
      applicationInfo: 'Additional application information',
      allergies: 'Allergies',
      diet: 'Special diet',
      maxFeeAccepted: 'Consent to the highest payment',
      serviceWorkerAttachmentsTitle: 'Appendices of service control',
      noAttachments: 'No attachments'
    },
    decisions: {
      title: 'Decisions',
      noDecisions: 'There are no decisions related to the application yet.',
      type: 'Type of decision',
      types: {
        CLUB: 'Club decision',
        DAYCARE: 'Early childhood education decision',
        DAYCARE_PART_TIME: 'Early childhood education decision (part-time)',
        PRESCHOOL: 'Preschool decision',
        PRESCHOOL_DAYCARE: 'Related early childhood education decision',
        PRESCHOOL_CLUB: 'Preschool club',
        PREPARATORY_EDUCATION: 'Decision of preparatory education'
      },
      num: 'Decision number',
      status: 'Status of the decision',
      statuses: {
        draft: 'Draft',
        waitingMailing: 'Awaiting mailing',
        PENDING: 'To be confirmed by the guardian',
        ACCEPTED: 'Received',
        REJECTED: 'Abandoned'
      },
      unit: 'Decision unit',
      download: 'Download the decision as a PDF file',
      downloadPending:
        'The PDF file of the decision is not yet available for download. Try again later.',
      response: {
        label: 'Confirmation on behalf of the municipality',
        accept: 'The guardian has received the place',
        reject: 'The guardian has abandoned the place',
        submit: 'Confirm on behalf of the citizen',
        acceptError:
          'Failed to receive the place. The date may be incorrect.',
        rejectError:
          'Failed to reject the location. Please refresh the page and try again.'
      },
      blocked:
        'This decision can only be approved after the pre-school education decision has been approved'
    },
    attachments: {
      title: 'Appendices',
      none: 'No attachments are attached to the application',
      name: 'File name',
      updated: 'Changed',
      contentType: 'Type',
      receivedByPaperAt: 'Delivered in paper form',
      receivedAt: 'Delivered electronically'
    },
    state: {
      title: 'Application status',
      status: 'Application status',
      origin: 'Application submission form',
      sent: 'Arrived',
      modified: 'Last modified',
      modifiedBy: 'Adapter',
      due: 'To be processed at the latest'
    },
    date: {
      DUE: 'The application must be processed at the latest',
      START: 'The starting need',
      ARRIVAL: 'Application received'
    },
    notes: {
      add: 'Add a note',
      newNote: 'A new note',
      created: 'Created',
      editing: 'Editable',
      lastEdited: 'Last modified',
      placeholder: 'Write a note',
      confirmDelete: 'Are you sure you want to delete the note?',
      sent: 'Posted',
      message: 'message',
      error: {
        save: 'Failed to save note',
        remove: 'Failed to delete note'
      }
    },
    messaging: {
      sendMessage: 'Send a message'
    }
  },
  childInformation: {
    restrictedDetails: 'Security prohibition',
    asAdult: 'View as an adult',
    personDetails: {
      title: 'Personal, contact and health information',
      attendanceReport: 'Attendance and absence information',
      name: 'Child\'s name',
      email: 'E-mail',
      socialSecurityNumber: 'Personal identification number',
      birthday: 'Date of birth',
      language: 'Language (VTJ)',
      address: 'Address',
      familyLink: 'Family information',
      languageAtHome: 'Home language, if other than the one mentioned in VTJ',
      specialDiet: 'Special diet used in food order integration',
      mealTexture: 'Food structure used in food order integration',
      participatesInBreakfast: 'Eat breakfast',
      participatesInBreakfastYes: 'Yes',
      participatesInBreakfastNo: 'No',
      nekkuDiet: 'Nekku meal order diet',
      nekkuSpecialDiet: 'Nekku special diet',
      nekkuSpecialDietInfo:
        'In the Nekku-special diet field, only those allergies that cannot be selected by ticking the Nekku-special diet field are recorded. The child\'s food and drinks are not recorded here, but are recorded in the Additional information section above.',
      noGuardian:
        'Guardian information is missing. The child\'s guardians cannot do business in eVaka',
      placeholder: {
        languageAtHome: 'Choose a language',
        languageAtHomeDetails: 'More information about the home language',
        specialDiet: 'Choose a special diet',
        mealTexture: 'Choose the texture of the food'
      }
    },
    familyContacts: {
      title: 'Family contact information and backup applicants',
      contacts: 'Contact information',
      name: 'Name',
      role: 'Role',
      roles: {
        LOCAL_GUARDIAN: 'Supporter',
        LOCAL_FOSTER_PARENT: 'Foster parent',
        LOCAL_ADULT: 'An adult in the same household',
        LOCAL_SIBLING: 'Child',
        REMOTE_GUARDIAN: 'Supporter',
        REMOTE_FOSTER_PARENT: 'Foster parent'
      },
      contact: 'E-mail and phone',
      contactPerson: 'Contact person',
      address: 'Address',
      backupPhone: 'Reserve no'
    },
    timeBasedStatuses: {
      ACTIVE: 'Active',
      ENDED: 'Ended',
      UPCOMING: 'Future'
    },
    serviceNeed: {
      title: 'Need for service',
      dateRange: 'Service need for time',
      hoursPerWeek: 'Weekly service requirement',
      hoursPerWeekInfo:
        'Enter the weekly service requirement here, which includes the total attendance time reported by the family, including possible pre-school time, free 5-year-old early childhood education and preparatory education.',
      hoursInWeek: 'h / week',
      serviceNeedDetails: 'Focusing on the service need',
      createdByName: 'Confirmation of the head of the unit',
      create: 'Create a new service requirement',
      removeServiceNeed: 'Do you want to remove the service requirement?',
      previousServiceNeeds: 'Previously created service needs',
      errors: {
        conflict:
          'The service need overlaps with another service need.',
        hardConflict:
          'The service requirement overlaps with the start date of another service requirement.',
        checkHours: 'Check',
        placementMismatchWarning:
          'The weekly service requirement does not correspond to the mode of operation of the investment.',
        autoCutWarning:
          'Previous overlapping service needs are automatically cut off.'
      }
    },
    dailyServiceTimes: {
      title: 'Daily early childhood education time',
      info: 'Enter here the daily early childhood education time stated in the early childhood education agreement, including preschool / preparatory education / free early childhood education for 5-year-olds.',
      info2:
        'Do not update the early childhood education period if the early childhood education period stated in the new contract has not changed from the previous one.',
      info3:
        'Irregular and regular absences are recorded in the diary.',
      create: 'Create a new early childhood education period',
      types: {
        REGULAR: 'Regular early childhood education',
        IRREGULAR: 'Irregular early childhood education period',
        VARIABLE_TIME: 'Variable early childhood education period'
      },
      weekdays: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday'
      },
      errors: {
        required: 'Mandatory information'
      },
      dailyServiceTime: 'Daily early childhood education time',
      validityPeriod: 'Daily early childhood education time in effect',
      validFrom: 'Daily early childhood education time effective from',
      validUntil: 'The validity of the daily early childhood education period ends',
      createNewTimes: 'Create a new daily early childhood education time',
      deleteModal: {
        title: 'Will the early childhood education period be abolished?',
        description:
          'Are you sure you want to delete the daily early childhood education time? The time cannot be restored, but must be added again after deletion if necessary.',
        deleteBtn: 'Remove time'
      },
      retroactiveModificationWarning:
        'Attention! You are retroactively modifying the daily early childhood education time. The entries in the child\'s attendance calendar may change during this period.'
    },
    assistance: {
      title: 'Need for support and support measures',
      unknown: 'Unknown',
      fields: {
        capacityFactor: 'Factor',
        lastModified: 'Last modified',
        lastModifiedBy: (name: string) => `Muokkaaja ${name}.`,
        level: 'Level',
        otherAssistanceMeasureType: 'Action',
        status: 'Status',
        validDuring: 'Validity period'
      },
      validationErrors: {
        overlap:
          'There is already a duplicate entry for this period. If necessary, edit the previous time period',
        startBeforeMinDate: (date: LocalDate) =>
          `Tämä tuki voi alkaa aikaisintaan ${date.format()}`,
        endAfterMaxDate: (date: LocalDate) =>
          `Tämän tuen voi myöntää korkeintaan ${date.format()} saakka`
      },
      types: {
        daycareAssistanceLevel: {
          GENERAL_SUPPORT: 'General support, no decision',
          GENERAL_SUPPORT_WITH_DECISION: 'General support, decision on support services',
          INTENSIFIED_SUPPORT: 'Enhanced support',
          SPECIAL_SUPPORT: 'Special support'
        },
        preschoolAssistanceLevel: {
          INTENSIFIED_SUPPORT: 'Enhanced support',
          SPECIAL_SUPPORT:
            'Special support without extended compulsory education',
          SPECIAL_SUPPORT_WITH_DECISION_LEVEL_1:
            'Special support and extended compulsory education - other (Regarding)',
          SPECIAL_SUPPORT_WITH_DECISION_LEVEL_2:
            'Special support and extended compulsory education - intellectual disability 2 (About)',
          CHILD_SUPPORT:
            'Child-specific support without early compulsory education (Applicable)',
          CHILD_SUPPORT_AND_EXTENDED_COMPULSORY_EDUCATION:
            'Child-specific support and early compulsory schooling (Regarding)',
          CHILD_SUPPORT_AND_OLD_EXTENDED_COMPULSORY_EDUCATION:
            'Child-specific support and old-style extended ov - other (Regarding, in use during the transition period 1 August 2025 - 31 July 2026)',
          CHILD_SUPPORT_2_AND_OLD_EXTENDED_COMPULSORY_EDUCATION:
            'Child-specific support and old-style extended OV - intellectual disability 2 (Regarding, in use during the transition period 1 August 2025 - 31 July 2026)',
          GROUP_SUPPORT: 'Group-specific forms of support (not used)'
        },
        otherAssistanceMeasureType: {
          TRANSPORT_BENEFIT: 'Transport benefit (Koski information for pre-schoolers)',
          ACCULTURATION_SUPPORT: 'Child integration support (ELY)',
          ANOMALOUS_EDUCATION_START: 'Unusual start time of teaching',
          CHILD_DISCUSSION_OFFERED: 'Children invited to speak',
          CHILD_DISCUSSION_HELD: 'Children are spoken for',
          CHILD_DISCUSSION_COUNSELING: 'Children talk counseling'
        }
      },
      assistanceFactor: {
        title: 'Support multiplier',
        create: 'Create a new support multiplier period',
        removeConfirmation: 'Do you want to remove the subsidy multiplier period?',
        info: (): React.ReactNode => undefined
      },
      daycareAssistance: {
        title: 'The level of support in early childhood education',
        create: 'Create a new support level period (early education)',
        removeConfirmation: 'Do you want to remove the support level period?'
      },
      preschoolAssistance: {
        title: 'Support in pre-school education',
        create: 'Create a new support period (primary education)',
        removeConfirmation: 'Do you want to remove the support period?'
      },
      otherAssistanceMeasure: {
        title: 'Other actions',
        create: 'Add another action',
        removeConfirmation: 'Do you want to delete another action?',
        infoList: 'More information on other activities:',
        info: {
          TRANSPORT_BENEFIT: (): React.ReactNode => undefined,
          ACCULTURATION_SUPPORT: (): React.ReactNode => undefined,
          ANOMALOUS_EDUCATION_START: (): React.ReactNode => undefined,
          CHILD_DISCUSSION_OFFERED: (): React.ReactNode => undefined,
          CHILD_DISCUSSION_HELD: (): React.ReactNode => undefined,
          CHILD_DISCUSSION_COUNSELING: (): React.ReactNode => undefined
        }
      }
    },
    assistanceNeed: {
      title: 'The need for support',
      fields: {
        dateRange: 'The need for support for time',
        capacityFactor: 'Child support multiplier',
        capacityFactorInfo:
          'The capacity is usually determined by the child\'s age and service needs. If the child has a support that uses more capacity, add the support factor to this point. For example, the coefficient for a child who needs support in a special group is 2.33' as ReactNode,
        bases: 'Basic'
      },
      create: 'Create a new support need period',
      removeConfirmation: 'Do you want to eliminate the need for support?',
      errors: {
        invalidCoefficient: 'Invalid multiplier.',
        conflict: 'The need for support overlaps with another need for support.',
        hardConflict:
          'The need for support overlaps with the start date of another need for support.',
        autoCutWarning:
          'Previous overlapping support needs are automatically cut off.'
      }
    },
    assistanceAction: {
      title: 'Support measures and measures',
      modified: 'Last modified',
      fields: {
        dateRange: 'Duration of aid measures',
        actions: 'Support measures',
        actionsByCategory: {
          DAYCARE: 'Support measures for early childhood education',
          PRESCHOOL: 'Preschool education support measures',
          OTHER: 'Other support measures'
        },
        actionTypes: {
          OTHER: 'Other support measure'
        },
        otherActionPlaceholder:
          'You can write here additional information about other support activities.',
        lastModifiedBy: (name: string) => `Muokkaaja ${name}.`
      },
      create: 'Create a new support period',
      removeConfirmation: 'Do you want to remove the support period?',
      errors: {
        conflict: 'The support measures overlap with another period.',
        hardConflict:
          'The support measures overlap with the start date of the second period.',
        autoCutWarning:
          'Previous overlapping support measures are automatically terminated.',
        startBeforeMinDate: (date: LocalDate) =>
          `Tämä tukitoimi voi alkaa aikaisintaan ${date.format()}`,
        endAfterMaxDate: (date: LocalDate) =>
          `Tämän tukitoimen voi myöntää korkeintaan ${date.format()} saakka`
      }
    },
    childDocuments: {
      title: {
        internal: 'Pedagogical documents',
        decision: 'Other decisions',
        external: 'Documents to be completed by guardians'
      },
      table: {
        document: 'Document',
        status: 'Status',
        open: 'Open the document',
        modified: 'Adapted',
        modifiedBy: (name: string) => `Muokkaaja ${name}.`,
        unit: 'Unit',
        valid: 'In effect',
        published: 'Published',
        publishedBy: (name: string) => `Julkaisija ${name}.`,
        sent: 'Posted',
        notSent: 'Not sent',
        answered: 'Answered',
        unanswered: 'Not answered'
      },
      addNew: {
        internal: 'Create a new pedagogical document',
        decision: 'Create a new decision',
        external: 'Create a document for guardians to fill out'
      },
      select: 'Select a document',
      removeConfirmation: 'Are you sure you want to delete the document?',
      confirmation:
        'Are you sure you want to open this document for the child? All documents are published to guardians and archived automatically at the end of the operating period',
      statuses: {
        DRAFT: 'Draft',
        PREPARED: 'Prepared',
        DECISION_PROPOSAL: 'Final presentation',
        COMPLETED: 'Ready'
      },
      decisions: {
        accept: 'Make a positive decision',
        acceptConfirmTitle: 'Are you sure you want to make a positive decision?',
        retroactiveWarningTitle: 'Attention!',
        retroactiveWarningMessage:
          'You are making a retroactive decision that starts in the past.',
        validityPeriod: 'Granted for time',
        reject: 'Make a negative decision',
        rejectConfirmTitle: 'Are you sure you want to make a negative decision?',
        annul: 'Annul the decision',
        annulConfirmTitle: 'Are you sure you want to cancel the decision?',
        annulInstructions:
          'Void the decision only for a justified reason, e.g. if the decision was accidentally made to the wrong unit. Always also notify the guardians of the cancellation.',
        annulReasonLabel: 'Reasoning for the annulment of the decision',
        decisionNumber: 'Decision number',
        updateValidity: 'Corrects the validity period of the decision',
        otherValidDecisions: {
          title: 'Other valid decisions',
          description1: 'You are making a positive decision',
          description2: (validity: DateRange) =>
            `Lapsella on muita päätöksiä, jotka ovat voimassa nyt tehtävän päätöksen astuessa voimaan ${validity.start.format()}`,
          label: 'Choose the appropriate action for the following decisions*',
          options: {
            end: 'Let\'s hang up',
            keep: 'Does not disconnect'
          }
        },
        errors: {
          conflict:
            'The customer already has a decision from the same date. Void the old decision or make a new decision to start at a later time.'
        }
      },
      editor: {
        lockedErrorTitle: 'The document is temporarily locked',
        lockedError:
          'Another user is editing the document. Try again later.',
        lockedErrorDetailed: (modifiedByName: string, opensAt: string) =>
          `Käyttäjä ${modifiedByName} on muokkaamassa asiakirjaa. Asiakirjan lukitus vapautuu ${opensAt} mikäli muokkaamista ei jatketa. Yritä myöhemmin uudelleen.`,
        saveError: 'Failed to save document.',
        preview: 'Preview',
        publish: 'Publish to guardian',
        publishConfirmTitle: 'Are you sure you want to publish to a guardian?',
        publishConfirmText:
          'The guardian gets to see the current version. After that, the changes you make will not be visible to the guardian until you publish again.',
        downloadPdf: 'Download as a PDF file',
        archive: 'Archive',
        alreadyArchived: (archivedAt: HelsinkiDateTime) =>
          `Asiakirja on arkistoitu ${archivedAt.toLocalDate().format()}`,
        archiveDisabledNotExternallyArchived:
          'The document has not been configured to be moved to an external archive',
        archiveDisabledNotCompleted: 'The document is not ready',
        goToNextStatus: {
          DRAFT: 'Publish in draft mode',
          PREPARED: 'Publish as Compiled',
          CITIZEN_DRAFT: 'Send a citizen to fill out',
          DECISION_PROPOSAL: 'Send to the decision maker',
          COMPLETED: 'Publish in ready mode'
        },
        goToNextStatusConfirmTitle: {
          DRAFT: 'Are you sure you want to publish the document in draft mode?',
          PREPARED: 'Are you sure you want to publish the document in Compiled status?',
          CITIZEN_DRAFT:
            'Are you sure you want to publish the document in the mode for the municipality to fill out?',
          DECISION_PROPOSAL:
            'Are you sure you want to send the decision proposal to the decision maker?',
          COMPLETED: 'Are you sure you want to publish the document in ready state?'
        },
        goToCompletedConfirmText:
          'The guardian gets to see the current version. A document in the Ready state can no longer be edited. Only an administrator can cancel this.',
        extraConfirmCompletion:
          'I understand that the document can no longer be edited after this',
        goToPrevStatus: {
          DRAFT: 'Return to draft',
          PREPARED: 'Return as prepared',
          CITIZEN_DRAFT: 'Return the citizen to fill out',
          DECISION_PROPOSAL: 'Return as closing motion', // not applicable,
          COMPLETED: 'Restore done' // not applicable
        },
        goToPrevStatusConfirmTitle: {
          DRAFT: 'Are you sure you want to return the document to a draft?',
          PREPARED: 'Are you sure you want to return the document as completed?',
          CITIZEN_DRAFT:
            'Are you sure you want to return the document for the municipality to fill out?',
          DECISION_PROPOSAL:
            'Are you sure you want to return the decision as a closing motion?', // not applicable,
          COMPLETED: 'Are you sure you want to return the document to completion?' // not applicable,
        },
        goBackToDraftConfirmText:
          'In the draft phase, you can edit the information in the document.',
        deleteDraft: 'Delete the draft',
        deleteDraftConfirmTitle: 'Are you sure you want to delete the draft?',
        fullyPublished: 'The latest version of the document has been published',
        notFullyPublished: (publishedAt: HelsinkiDateTime | null) =>
          `Asiakirjassa on julkaisemattomia muutoksia ${
            publishedAt ? ` (julkaistu ${publishedAt.format()})` : ''
          }`,
        decisionMaker: 'The decision maker',
        notSet: 'Not set'
      }
    },
    assistanceNeedVoucherCoefficient: {
      actions: 'Activities',
      create: 'Set a new service voucher multiplier',
      deleteModal: {
        title: 'Will the service voucher multiplier be removed?',
        description:
          'Are you sure you want to remove the service voucher multiplier? A new value decision is not created for the customer, even if you remove the multiplier, but you must make a new retroactive value decision.',
        delete: 'Remove the multiplier'
      },
      factor: 'Factor',
      form: {
        coefficient: 'Service voucher factor (number)',
        editTitle: 'Edit the service voucher multiplier',
        errors: {
          previousOverlap:
            'The previous overlapping service voucher multiplier is automatically cut off.',
          upcomingOverlap:
            'The future overlapping service voucher multiplier will be moved to start later automatically.',
          fullOverlap:
            'The previous overlapping service voucher multiplier is automatically deleted.',
          coefficientRange: 'The coefficient must be between 1-10'
        },
        title: 'Set a new service voucher multiplier',
        titleInfo:
          'Choose the validity dates of the service voucher multiplier according to the decision on the need for support.',
        validityPeriod: 'Service voucher factor valid'
      },
      lastModified: 'Last modified',
      lastModifiedBy: (name: string) => `Muokkaaja ${name}.`,
      sectionTitle: 'Service voucher multiplier',
      status: 'Status',
      unknown: 'Unknown',
      validityPeriod: 'Validity period',
      voucherCoefficient: 'Service voucher multiplier'
    },
    application: {
      title: 'Applications',
      guardian: 'Applicant',
      preferredUnit: 'Searched unit',
      startDate: 'Searched start date',
      sentDate: 'Application Arrival Date',
      type: 'Service format',
      types: {
        PRESCHOOL: 'Preschool education',
        PRESCHOOL_DAYCARE: 'Connected early childhood education',
        PREPARATORY_EDUCATION: 'Preparatory teaching',
        DAYCARE: 'Early childhood education',
        DAYCARE_PART_TIME: 'Early childhood education',
        CLUB: 'Club'
      },
      status: 'Status',
      statuses: {
        CREATED: 'Draft',
        SENT: 'Arrived',
        WAITING_PLACEMENT: 'Awaiting placement',
        WAITING_DECISION: 'Preparation of the decision',
        WAITING_UNIT_CONFIRMATION: 'Awaiting manager approval',
        WAITING_MAILING: 'Awaiting mailing',
        WAITING_CONFIRMATION: 'To be confirmed by the guardian',
        REJECTED: 'Place abandoned',
        ACTIVE: 'Place received',
        CANCELLED: 'Removed from processing'
      },
      open: 'Open the application',
      create: {
        createButton: 'Create a new application',
        modalTitle: 'New application',
        applier: 'Applicant',
        personTypes: {
          GUARDIAN: 'Choose from guardians',
          DB_SEARCH: 'Search from customer information',
          VTJ: 'Search from VTJ',
          NEW_NO_SSN: 'Create a new boring one'
        },
        applicationType: 'Application type',
        applicationTypes: {
          DAYCARE: 'Early childhood education application',
          PRESCHOOL: 'Preschool application',
          CLUB: 'Club application'
        },
        sentDate: 'Application received',
        hideFromGuardian: 'Hide the application from the guardian',
        transferApplication: 'Transfer application'
      }
    },
    additionalInformation: {
      title: 'More information',
      allergies: 'Allergies',
      diet: 'Special diet',
      additionalInfo: 'Additional information',
      preferredName: 'Nickname',
      medication: 'Medication'
    },
    income: {
      title: 'Income information'
    },
    feeAlteration: {
      title: 'Discounts, exemptions and increases',
      error: 'Failed to load payment changes',
      create: 'Create a new payment change',
      updateError: 'Saving the payment change failed',
      deleteError: 'Deletion of payment change failed',
      confirmDelete: 'Do you want to remove the payment change?',
      lastModifiedAt: (date: string) => `Viimeksi muokattu ${date}`,
      lastModifiedBy: (name: string) => `Muokkaaja: ${name}`,
      editor: {
        titleNew: 'Add a new discount or increase',
        titleEdit: 'Edit the discount or increase',
        alterationType: 'Change type',
        alterationTypePlaceholder: 'Change type',
        validDuring: 'Granted for time',
        notes: 'More information',
        cancel: 'Cancel',
        save: 'Save'
      },
      types: {
        DISCOUNT: 'Discount',
        INCREASE: 'Raise',
        RELIEF: 'Relief'
      },
      attachmentsTitle: 'Appendices',
      employeeAttachments: {
        title: 'Add attachments',
        description:
          'Here you can add customer-supplied attachments to fee reductions, exemptions or increases.'
      }
    },
    placements: {
      title: 'Investments and service needs',
      placements: 'Investments',
      rowTitle: 'Investment decision valid',
      startDate: 'Start date',
      endDate: 'End date',
      createdBy: 'Creator',
      source: 'The recipient of the place',
      sourceOptions: {
        CITIZEN: 'Municipal application',
        EMPLOYEE_MANUAL: 'Employee manually',
        EMPLOYEE_PAPER: 'Employee on paper application',
        SYSTEM: 'System',
        UNKNOWN: 'Information not available'
      },
      modifiedAt: 'Adapted',
      modifiedBy: 'A change maker',
      terminatedByGuardian: 'Dismissed by the guardian',
      terminated: 'Redundant',
      area: 'Area',
      daycareUnit: 'Post',
      daycareGroups: 'Group',
      daycareGroupMissing: 'Not grouped',
      type: 'Investment type',
      providerType: 'Form of organization',
      updatedAt: 'Last updated',
      serviceNeedMissing1: 'The investment lacks a need for service',
      serviceNeedMissing2:
        'per day. Mark the need for service for the entire duration of the investment.',
      serviceNeedMissingTooltip1: 'There is no need for service',
      serviceNeedMissingTooltip2: 'per day.',
      deletePlacement: {
        btn: 'Remove the ranking',
        confirmTitle: 'Are you sure you want to cancel this investment?',
        hasDependingBackupCares:
          'The child\'s backup placement is dependent on this placement, so removing this placement may change or remove the backup placement.'
      },
      createPlacement: {
        btn: 'Create a new investment',
        title: 'New investment',
        text: 'A decision cannot be sent for this investment. If the placement overlaps with the child\'s previously created placements, these placements will be shortened or deleted automatically.',
        temporaryDaycareWarning: 'NOTE! Do not use reserve investment when making!',
        startDateMissing: 'The start date is mandatory information',
        unitMissing: 'The unit is missing',
        preschoolTermNotOpen: 'The placement must be in the pre-school period',
        preschoolExtendedTermNotOpen:
          'The placement must be in the pre-school period',
        placeGuarantee: {
          title: 'Early childhood education place guarantee',
          info: 'The future investment is related to the early childhood education place guarantee'
        }
      },
      error: {
        conflict: {
          title: 'The date could not be edited',
          text:
            'The child has an placement that overlaps' +
            'with the dates you have now indicated. You can go back to edit' +
            'the dates you indicated or to contact the administrator.'
        }
      },
      warning: {
        overlap: 'Time already has an investment',
        ghostUnit: 'The unit is marked as a ghost unit',
        backupCareDepends:
          'The backup investment is dependent on this investment, and a changed time frame may remove or change the backup investment.'
      },
      serviceNeeds: {
        title: 'Investment service needs',
        period: 'Interval',
        description: 'Description',
        shiftCare: 'Evening/Shift',
        shiftCareTypes: {
          NONE: 'No',
          INTERMITTENT: 'Random',
          FULL: 'Yes'
        },
        partWeek: 'Semi-weekly',
        confirmed: 'Confirmed',
        createNewBtn: 'Create a new service requirement',
        addNewBtn: 'Add a service requirement',
        optionPlaceholder: 'Select...',
        missing: 'Missing service need',
        deleteServiceNeed: {
          btn: 'Remove the service requirement',
          confirmTitle: 'Are you sure you want to remove this service requirement?'
        },
        overlapWarning: {
          title: 'Service needs overlap',
          message:
            'The service need you have marked overlaps with the previously announced one. If you confirm the service need you marked now, the previously marked service need will be automatically cut off from the overlapping period.'
        },
        optionStartNotValidWarningTitle: (validFrom: LocalDate) =>
          `Valittu palveluntarvetyyppi on käytettävissä vasta ${validFrom.format()} alkaen`,
        optionEndNotValidWarningTitle: (validTo: LocalDate) =>
          `Valittu palveluntarvetyyppi on käytettävissä vain ${validTo.format()} asti`,
        optionStartEndNotValidWarningTitle: (validity: FiniteDateRange) =>
          `Valittu palveluntarvetyyppi on käytettävissä ajalla ${validity.format()}`,
        notFullyValidOptionWarning:
          'The selected type of service need must be available all the time. If necessary, create a service requirement in two parts.'
      }
    },
    absenceApplications: {
      title: 'Applications for absence from pre-school education',
      absenceApplication: 'Absence application',
      range: 'Period of absence',
      createdBy: 'Applicant',
      description: 'Reason for absence',
      acceptInfo:
        'If you accept the proposal, the child will automatically be marked absent for the time requested by the guardian.',
      reject: 'Reject the application',
      accept: 'Accept the application',
      list: 'Previous applications',
      status: 'Status',
      statusText: {
        WAITING_DECISION: 'Awaiting decision',
        ACCEPTED: 'Admitted',
        REJECTED: 'Abandoned'
      },
      rejectedReason: 'Reason',
      rejectModal: {
        title: 'Rejection of an application for absence from pre-school education',
        reason: 'Reason for rejection'
      },
      userType: {
        SYSTEM: 'system',
        CITIZEN: 'supporter',
        EMPLOYEE: 'worker',
        MOBILE_DEVICE: 'mobile',
        UNKNOWN: 'unknown'
      }
    },
    serviceApplications: {
      title: 'Requests for changes in service needs',
      applicationTitle: 'Service requirement change application',
      sentAt: 'Posted',
      sentBy: 'Applicant',
      startDate: 'Proposed start date',
      serviceNeed: 'Proposed service requirement',
      additionalInfo: 'Additional information',
      status: 'Status',
      decision: {
        statuses: {
          ACCEPTED: 'Admitted',
          REJECTED: 'Abandoned'
        },
        rejectedReason: 'Ground for rejection',
        accept: 'Accept',
        reject: 'Reject',
        confirmAcceptTitle: 'Will the application for a new service need be accepted?',
        confirmAcceptText: (range: FiniteDateRange, placementChange: boolean) =>
          `Uusi ${placementChange ? 'placement and' : ''}palveluntarve luodaan ajalle ${range.format()}.`,
        shiftCareLabel: 'Evening/day care',
        shiftCareCheckbox: 'The child has the right to evening/day care',
        partWeekLabel: 'Semi-weekly',
        partWeekCheckbox: 'The service requirement is part-weekly',
        confirmAcceptBtn: 'Confirm',
        confirmRejectTitle: 'Rejection of application'
      },
      decidedApplications: 'Processed applications',
      noApplications: 'No applications'
    },
    fridgeParents: {
      title: 'The principals',
      name: 'Name',
      ssn: 'Hetu',
      startDate: 'Starting with',
      endDate: 'Finishing',
      status: 'Status'
    },
    fosterParents: {
      title: 'Foster parents',
      name: 'Name',
      ssn: 'Hetu',
      startDate: 'Starting with',
      endDate: 'Finishing',
      status: 'Status'
    },
    backupCares: {
      title: 'Backup investments',
      remove: 'Do you want to remove the reserve investment?',
      editing: 'in editing',
      create: 'Create a new backup investment',
      dateRange: 'Backup placement period',
      unit: 'Unit',
      validationNoMatchingPlacement:
        'Backup placement is not during any child\'s placement.',
      validationChildAlreadyInOtherUnit:
        'The child is already registered in another unit.',
      validationBackupCareNotOpen:
        'The unit is not open for the entire duration of the reserve investment.'
    },
    backupPickups: {
      title: 'Reserve applicants',
      name: 'Name of reserve applicant',
      phone: 'Telephone number',
      add: 'Add a backup applicant',
      edit: 'Edit the reserve applicant\'s information',
      removeConfirmation: 'Are you sure you want to delete the backup requester?'
    },
    childDocumentsSectionTitle: 'The child\'s documents',
    pedagogicalDocument: {
      create: 'Add new',
      created: 'Added',
      createdBy: (name: string) => `Lisääjä: ${name}`,
      date: 'Date',
      descriptionInfo: '',
      description: 'Pedagogical description',
      document: 'Document',
      documentInfo: '',
      explanation: '',
      explanationInfo: '',
      lastModified: 'Last modified',
      lastModifiedBy: (name: string) => `Muokkaaja: ${name}`,
      removeConfirmation: 'Do you want to delete the document?',
      removeConfirmationText:
        'Are you sure you want to delete the pedagogical document and its description text? The deletion cannot be undone, and the document will also be deleted from the custodian\'s view.',
      title: 'Pedagogical documentation'
    }
  },
  personSearch: {
    search: 'Search by ID',
    searchByName: 'Search by ID or name',
    notFound: 'No person found',
    inputPlaceholder: 'Search by name, address or social security number',
    age: 'Age',
    address: 'Address',
    maxResultsFound: 'Narrow your search to see other results',
    socialSecurityNumber: 'Personal identification number',
    newAdult: 'Create a carefree adult',
    newChild: 'Create a carefree child',
    addPersonFromVTJ: {
      title: 'That person from VTJ',
      modalConfirmLabel: 'That person',
      ssnLabel: 'Personal identification number',
      restrictedDetails: 'The person has a security ban',
      badRequest: 'Invalid ID',
      notFound: 'No results',
      unexpectedError: 'Search for personal data failed'
    },
    createNewPerson: {
      title: 'Create a nonchalant persona',
      modalConfirmLabel: 'Create a person',
      form: {
        firstName: 'First name',
        lastName: 'Last name',
        dateOfBirth: 'Date of birth',
        address: 'Address',
        streetAddress: 'Street address',
        postalCode: 'Postal no',
        postOffice: 'Post',
        phone: 'Phone',
        email: 'E-mail'
      }
    }
  },
  personProfile: {
    restrictedDetails: 'Security prohibition',
    asChild: 'View as a child',
    timeline: 'A timeline',
    personDetails: 'Personal and contact information',
    addSsn: 'Set the point',
    noSsn: 'Careless',
    ssnAddingDisabledCheckbox:
      'Only main users have the right to set a child ID',
    ssnAddingDisabledInfo:
      'Users of service guidance and finances cannot set a personal identification number for the child. When the personal identification number is missing, the child does not have a guardian relationship. If the personal identification number is to be set later, the child\'s previous documents must be deleted from the system.',
    ssnInvalid: 'Invalid ID',
    ssnConflict: 'This user is already found in the system.',
    showDetails: 'Show all',
    hideDetails: 'Show less',
    updateFromVtj: 'Update from VTJ',
    partner: 'Spouses',
    partnerInfo:
      'Another person living in a married/cohabiting relationship at the same address',
    partnerAdd: 'Add spouse',
    financeNotesAndMessages: {
      title: 'Finance notes and messages',
      addNote: 'Add a note',
      sendMessage: 'Send an eVaka message',
      noMessaging:
        'An eVaka message can only be sent to a person with a social security number.',
      link: 'Link to original post',
      showMessages: 'Show all posts',
      hideMessages: 'Hide all messages',
      confirmDeleteNote: 'Are you sure you want to delete the note?',
      confirmArchiveThread: 'Are you sure you want to move the thread to the archive?',
      note: 'Note',
      created: 'Created',
      inEdit: 'Editable'
    },
    forceManualFeeDecisionsLabel: 'Sending payment decisions',
    forceManualFeeDecisionsChecked: 'Always sent manually',
    forceManualFeeDecisionsUnchecked: 'Automatically if possible',
    fridgeChildOfHead: 'Children under the age of 18 under the principal',
    fridgeChildAdd: 'Add a child',
    fosterChildren: {
      sectionTitle: 'Foster children',
      addFosterChildTitle: 'Add a new foster child',
      addFosterChildParagraph:
        'The foster parent sees the same information about the child in eVaka as the guardian. A foster child may only be added with the permission of the social worker.',
      updateFosterChildTitle: 'Update the validity period of the relationship',
      childLabel: 'Hetu or name',
      validDuringLabel: 'In effect',
      createError: 'Failed to add foster child',
      deleteFosterChildTitle: 'Removal of foster child',
      deleteFosterChildParagraph:
        'Are you sure you want to delete the foster child? When the foster parenting ends, mark the end time for the relationship.'
    },
    fosterParents: 'Foster parents',
    applications: 'Applications',
    feeDecisions: {
      title: 'The principal\'s payment decisions',
      createRetroactive: 'Create retroactive payment decision drafts'
    },
    invoices: 'The principal\'s invoices',
    invoiceCorrections: {
      title: 'Refunds and increases',
      noteModalTitle: 'The economy\'s own note',
      noteModalInfo: 'The note will not appear on the invoice.',
      invoiceStatusHeader: 'Status',
      invoiceStatus: (status: InvoiceStatus | null): string =>
        status === 'DRAFT'
          ? 'With a draft invoice'
          : status
            ? 'On the bill'
            : 'Not on the bill'
    },
    voucherValueDecisions: {
      title: 'Value decisions of the principal',
      createRetroactive: 'Create retrospective value judgment drafts'
    },
    dependants: 'Dependents of the principal',
    guardiansAndParents: 'Guardians and principals',
    guardians: 'Guardians',
    name: 'Name',
    ssn: 'Hetu',
    streetAddress: 'Street address',
    age: 'Age',
    evakaRights: {
      tableHeader: 'eVaka rights',
      statusAllowed: 'Allowable',
      statusDenied: 'Forbidden',
      editModalTitle: 'The guardian\'s eVaka rights',
      modalInfoParagraph: (
        <>
          eVaka-oikeuksilla määritetään, näkeekö huoltaja lapseen liittyvät
          tiedot eVakassa. Oikeudet voi kieltää{' '}
          <strong>
            esimerkiksi sosiaalityöntekijän tai muun toimivaltaisen viranomaisen
            ilmoituksen perusteella
          </strong>{' '}
          . Oikeudet tulee palauttaa, mikäli kiellolle ei ole enää perustetta.
        </>
      ),
      modalUpdateSubtitle:
        'Denying the guardian\'s eVaka rights when the child has been taken into care',
      confirmedLabel:
        'I confirm that the social worker has written permission to limit the guardian\'s access to information',
      deniedLabel: 'I deny eVaka rights to the guardian of the child taken into care'
    },
    familyOverview: {
      title: 'Summary of family information',
      colName: 'Name',
      colRole: 'Role in the family',
      colAge: 'Age',
      colIncome: 'Revenue',
      colAddress: 'Address',
      role: {
        HEAD: 'Principal',
        PARTNER: 'Spouse',
        CHILD: 'Child'
      },
      familySizeLabel: 'Family size',
      familySizeValue: (adults: number, children: number) => {
        const adultText = adults === 1 ? 'adult' : 'adult'
        const childrenText = children === 1 ? 'child' : 'spatula'
        return `${adults} ${adultText}, ${children} ${childrenText}`
      },
      incomeTotalLabel: 'Total income of adults',
      incomeValue: (val: string) => `${val} €`,
      incomeMissingCompletely: 'Income information is missing'
    },
    fridgeHead: {
      error: {
        edit: {
          title: 'Master edit failed!'
        }
      }
    },
    fridgePartner: {
      newPartner: 'A new spouse',
      editPartner: 'Spouse editing',
      removePartner: 'Removal of spouse',
      confirmText:
        'Are you sure you want to delete a spouse? When the spouse changes, mark the end time for the previous relationship and then add the new spouse',
      error: {
        remove: {
          title: 'Spouse deletion failed!'
        },
        add: {
          title: 'Failed to add spouse!'
        },
        edit: {
          title: 'Spouse editing failed!'
        },
        conflict:
          'The parties have an active relationship for the given time period. The current active relationship must be terminated before creating a new one'
      },
      validation: {
        deadPerson:
          'The end date of the relationship cannot be after the date of the person\'s death',
        deadPartner:
          'The end date of the relationship cannot be after the date of death of the spouse'
      },
      searchTitle: 'Hetu or name'
    },
    fridgeChild: {
      newChild: 'A new child',
      editChild: 'Child editing',
      removeChild: 'Child removal',
      confirmText:
        'Are you sure you want to remove the child? When the principal changes, mark the end time for the previous relationship and then add a new one',
      error: {
        add: {
          title: 'Failed to add child!'
        },
        edit: {
          title: 'Failed to edit child!'
        },
        remove: {
          title: 'Failed to remove child!'
        },
        conflict:
          'The child in question already has a boss in this period. The existing principal relationship must be terminated first'
      },
      validation: {
        deadAdult:
          'The end date of the relationship cannot be after the date of the adult\'s death',
        deadChild:
          'The end date of the relationship cannot be after the date of the child\'s death'
      },
      searchTitle: 'Hetu or name'
    },
    application: {
      child: 'Child',
      preferredUnit: 'Searched unit',
      startDate: 'Searched start date',
      sentDate: 'Application Arrival Date',
      type: 'Service format',
      types: {
        PRESCHOOL: 'Preschool education',
        PRESCHOOL_WITH_DAYCARE: 'Preschool + related',
        PRESCHOOL_DAYCARE: 'Connected early childhood education',
        PRESCHOOL_CLUB: 'Preschool club',
        PREPARATORY_EDUCATION: 'Preparatory teaching',
        PREPARATORY_WITH_DAYCARE: 'Preparatory teaching + related',
        DAYCARE: 'Early childhood education',
        DAYCARE_PART_TIME: 'Early childhood education',
        CLUB: 'Club'
      },
      status: 'Status',
      open: 'Open the application',
      statuses: {
        CREATED: 'Draft',
        SENT: 'Arrived',
        WAITING_PLACEMENT: 'Awaiting placement',
        WAITING_DECISION: 'Preparation of the decision',
        WAITING_UNIT_CONFIRMATION: 'Awaiting manager approval',
        WAITING_MAILING: 'Awaiting mailing',
        WAITING_CONFIRMATION: 'To be confirmed by the guardian',
        REJECTED: 'Place abandoned',
        ACTIVE: 'Place received',
        CANCELLED: 'Removed from processing'
      }
    },
    decision: {
      decisions: 'Decisions',
      decisionUnit: 'Investment unit',
      status: 'Status',
      archived: 'Archived',
      statuses: {
        PENDING: 'Waiting for a reply',
        ACCEPTED: 'Admitted',
        REJECTED: 'Abandoned'
      },
      archive: 'Archive',
      startDate: 'Start date to be decided',
      sentDate: 'Decision sent'
    },
    income: {
      title: 'Income information',
      itemHeader: 'Income data for the period',
      itemHeaderNew: 'New income information',
      lastModifiedAt: (date: string) => `Viimeksi muokattu ${date}`,
      lastModifiedBy: (name: string) => `Muokkaaja: ${name}`,
      details: {
        attachments: 'Appendices',
        name: 'Name',
        created: 'Income information created',
        handler: 'Handler',
        originApplication:
          'With the application, the guardian has agreed to the highest payment category',
        dateRange: 'For the period',
        notes: 'Additional information',
        effect: 'Basis of payment',
        effectOptions: {
          MAX_FEE_ACCEPTED: 'The guardian has agreed to the highest payment category',
          INCOMPLETE: 'Incomplete income information',
          INCOME: 'Income information provided by the guardian',
          NOT_AVAILABLE: 'Incomplete income information'
        },
        miscTitle: 'Additional information',
        incomeTitle: 'Revenue',
        income: 'Revenue',
        expensesTitle: 'Expenditure',
        expenses: 'Expenditure',
        amount: '€',
        coefficient: 'Factor',
        monthlyAmount: '€ / MM',
        time: 'For the period',
        sum: 'In total',
        entrepreneur: 'Entrepreneur',
        echa: 'European Chemicals Agency',
        source: 'Source',
        createdFromApplication: 'Automatically created on request',
        application: 'Application',
        incomeCoefficients: {
          MONTHLY_WITH_HOLIDAY_BONUS: 'Month',
          MONTHLY_NO_HOLIDAY_BONUS: 'A month without vacation pay',
          BI_WEEKLY_WITH_HOLIDAY_BONUS: '2 weeks',
          BI_WEEKLY_NO_HOLIDAY_BONUS: '2 weeks without vacation pay',
          DAILY_ALLOWANCE_21_5: 'Daily allowance x 21.5',
          DAILY_ALLOWANCE_25: 'Daily allowance x 25',
          YEARLY: 'Year'
        },
        updateError: 'Failed to save input data',
        missingIncomeDaysWarningTitle: 'Income information is missing for some days',
        missingIncomeDaysWarningText: (missingIncomePeriodsString: string) =>
          `Tulotiedot puuttuvat seuraavilta päiviltä: ${missingIncomePeriodsString}. Jos tulotietoja ei lisätä, tulot määräytyvät näille päiville korkeimman maksuluokan mukaan. Tarkista päivämäärät ja lisää tarvittaessa tulotiedot puuttuville päiville.`,
        conflictErrorText:
          'Income data has already been saved for the period! Check the validity periods of income information.',
        closeWarning: 'Remember to save!',
        closeWarningText:
          'Save or cancel changes before closing the form.'
      },
      add: 'Create a new income record',
      deleteModal: {
        title: 'Deletion of income information',
        confirmText: 'Are you sure you want to delete the income data for the period?',
        cancelButton: 'Cancel',
        deleteButton: 'Remove'
      }
    },
    incomeStatement: {
      title: 'Income statements',
      notificationsTitle: 'Reminders about completing the income statement',
      custodianTitle: 'Income statements for dependents',
      noIncomeStatements: 'No income statements',
      incomeStatementHeading: 'The customer\'s income statement form',
      sentAtHeading: 'Arrival date',
      handledHeading: 'Wrought',
      open: 'Open the form',
      handled: 'Income statement processed',
      notificationSent: 'Posted',
      noNotifications: 'No reminders sent',
      notificationTypes: {
        INITIAL_EMAIL: 'First reminder',
        REMINDER_EMAIL: 'Another reminder',
        EXPIRED_EMAIL: 'Income ended',
        NEW_CUSTOMER: 'A beginner customer'
      },
      noCustodians: 'No dependents'
    },
    invoice: {
      createReplacementDrafts: 'Create adjustment invoices',
      validity: 'Season',
      price: 'Sum',
      status: 'Status'
    },
    downloadAddressPage: 'Download the address page'
  },
  timeline: {
    title: 'Family timeline',
    feeDecision: 'Fee decision',
    valueDecision: 'Voucher value decision',
    partner: 'Spouse',
    child: 'Child',
    createdAtTitle: 'Created',
    unknownSource: 'Source unknown',
    modifiedAtTitle: 'Adapted',
    unknownModification: 'The author of the modification is unknown',
    notModified: 'Not edited',
    user: 'User',
    application: 'Application',
    dvvSync: 'Population Information System',
    notAvailable: 'Time not known',
    DVV: 'Population information system synchronization'
  },
  incomeStatement: {
    startDate: 'Effective from',
    feeBasis: 'Basis of customer payment',

    grossTitle: 'Gross income',
    noIncomeTitle:
      'No income or subsidies, the information can be checked in the income register and Kela',
    noIncomeDescription: 'Describe your situation in more detail',
    incomeSource: 'Delivery of information',
    incomesRegister:
      'I agree that information related to my income will be viewed from Kela and the income register.',
    attachmentsAndKela:
      'I provide the information as attachments, and you can check my information at Kela',
    grossEstimatedIncome: 'Estimate of gross income',
    otherIncome: 'Other income',
    otherIncomeTypes: {
      PENSION: 'Pension',
      ADULT_EDUCATION_ALLOWANCE: 'Adult education support',
      SICKNESS_ALLOWANCE: 'Sickness benefit',
      PARENTAL_ALLOWANCE: 'Maternity and parental allowance',
      HOME_CARE_ALLOWANCE: 'Children\'s home care allowance',
      FLEXIBLE_AND_PARTIAL_HOME_CARE_ALLOWANCE:
        'Flexible or partial care allowance',
      ALIMONY: 'Child support or support',
      INTEREST_AND_INVESTMENT_INCOME: 'Interest and dividend income',
      RENTAL_INCOME: 'Rental income',
      UNEMPLOYMENT_ALLOWANCE: 'Unemployment allowance',
      LABOUR_MARKET_SUBSIDY: 'Labor market support',
      ADJUSTED_DAILY_ALLOWANCE: 'Agreed daily allowance',
      JOB_ALTERNATION_COMPENSATION: 'Shift leave allowance',
      REWARD_OR_BONUS: 'Reward or bonus',
      RELATIVE_CARE_SUPPORT: 'Support for family care',
      BASIC_INCOME: 'Basic income',
      FOREST_INCOME: 'Forest income',
      FAMILY_CARE_COMPENSATION: 'Family care fees',
      REHABILITATION: 'Rehabilitation support or rehabilitation allowance',
      EDUCATION_ALLOWANCE: 'Education allowance',
      GRANT: 'Scholarship',
      APPRENTICESHIP_SALARY: 'Salary income from apprenticeship training',
      ACCIDENT_INSURANCE_COMPENSATION: 'Compensation from accident insurance',
      OTHER_INCOME: 'Other income'
    },
    otherIncomeInfo: 'Estimates of other income',

    entrepreneurTitle: 'Income information of the entrepreneur',
    startOfEntrepreneurship: 'Entrepreneurship started',
    companyName: 'Name of the company/companies',
    businessId: 'Y ID / Y IDs',
    spouseWorksInCompany: 'Does the spouse work in the company',
    startupGrant: 'Starting money',
    companyInfoTitle: 'Company details',
    checkupConsentLabel: 'Data verification',
    checkupConsent:
      'I agree that information related to my income will be reviewed from the income register and Kela, if necessary.',
    companyType: 'Mode of operation',
    selfEmployed: 'Trade name',
    selfEmployedAttachments:
      'I am submitting the company\'s latest profit and loss statement or tax decision as attachments.',
    selfEmployedEstimation: 'Estimate of average monthly income',
    limitedCompany: 'Limited company',
    limitedCompanyIncomesRegister:
      'You can check my income directly from the income register and, if necessary, from Kela.',
    limitedCompanyAttachments:
      'I submit proof of my income as an attachment and I agree that the information related to my income will be reviewed by Kela.',
    partnership: 'Open company or limited partnership',
    lightEntrepreneur: 'Light entrepreneurship',
    attachments: 'Appendices',

    estimatedMonthlyIncome: 'Average income €/month',
    timeRange: 'In time',

    accountantTitle: 'Accountant information',
    accountant: 'Accountant',
    email: 'E-mail address',
    phone: 'Telephone number',
    address: 'Postal address',

    otherInfoTitle: 'Other income-related information',
    student: 'Student',
    alimonyPayer: 'Pay child support',
    otherInfo: 'More information about income information',

    citizenAttachments: {
      title: 'Appendices related to income and early childhood education fees',
      noAttachments: 'No attachments',
      attachmentMissing: 'The attachment is missing'
    },

    employeeAttachments: {
      title: 'Add attachments',
      description:
        'Here you can add attachments submitted by the customer in paper form to the income statement returned via eVaka.'
    },

    statementTypes: {
      HIGHEST_FEE: 'Consent to the highest payment category',
      INCOME: 'Income information provided by the guardian',
      CHILD_INCOME: 'Child\'s income information'
    },
    table: {
      title: 'Income statements awaiting processing',
      customer: 'Customer',
      area: 'Area',
      sentAt: 'Posted',
      citizenModifiedAt: 'Adapted',
      startDate: 'In effect',
      incomeEndDate: 'Income information ends',
      type: 'Type',
      link: 'Statement',
      note: 'Note'
    },
    noNote: 'There is no note on the income statement',
    handlerNotesForm: {
      title: 'Handling',
      statusLabel: 'Status',
      status: {
        SENT: 'Awaiting processing',
        HANDLING: 'Processing',
        HANDLED: 'Wrought'
      },
      statusInfo:
        'When the income statement is being processed, the municipality cannot cancel the application, but can add missing attachments.',
      startHandlingBtn: 'Take for processing',
      markHandledBtn: 'Mark as processed',
      returnToHandlingBtn: 'Return for processing',
      handlerNote: 'Note (internal)'
    },
    attachmentNames: {
      OTHER: 'Other attachment',
      PENSION: 'Decision on retirement',
      ADULT_EDUCATION_ALLOWANCE: 'Decision on adult education support',
      SICKNESS_ALLOWANCE: 'Decision on sickness allowance',
      PARENTAL_ALLOWANCE: 'Decision on maternity or parental allowance',
      HOME_CARE_ALLOWANCE: 'Decision on home care support',
      FLEXIBLE_AND_PARTIAL_HOME_CARE_ALLOWANCE: 'Decision on care allowance',
      ALIMONY: 'Maintenance agreement or decision on maintenance support',
      UNEMPLOYMENT_ALLOWANCE: 'Decision on unemployment allowance',
      LABOUR_MARKET_SUBSIDY: 'Decision on labor market support',
      ADJUSTED_DAILY_ALLOWANCE: 'Decision on daily allowance',
      JOB_ALTERNATION_COMPENSATION: 'Voucher for rotation leave compensation',
      REWARD_OR_BONUS: 'Salary slip for bonus and/or remuneration',
      RELATIVE_CARE_SUPPORT: 'Decision on family care support',
      BASIC_INCOME: 'Decision on basic income',
      FOREST_INCOME: 'Proof of forest income',
      FAMILY_CARE_COMPENSATION: 'Certificates of family care fees',
      REHABILITATION: 'Decision on rehabilitation support or rehabilitation allowance',
      EDUCATION_ALLOWANCE: 'Decision on education allowance',
      GRANT: 'Proof of grant',
      APPRENTICESHIP_SALARY: 'Proof of salary income from apprenticeship training',
      ACCIDENT_INSURANCE_COMPENSATION:
        'Proof of accident insurance compensation',
      OTHER_INCOME: 'Attachments from other income',
      ALIMONY_PAYOUT: 'Proof of payment for child support payments',
      INTEREST_AND_INVESTMENT_INCOME: 'Certificates of interest and dividend income',
      RENTAL_INCOME: 'Certificates of rental income and consideration',
      PAYSLIP_GROSS: 'Latest pay stub',
      STARTUP_GRANT: 'Starting money decision',
      ACCOUNTANT_REPORT_PARTNERSHIP:
        'Accountant\'s report on salary and fringe benefits',
      PAYSLIP_LLC: 'Latest pay stub',
      ACCOUNTANT_REPORT_LLC:
        'Accountant\'s report on fringe benefits and dividends',
      PROFIT_AND_LOSS_STATEMENT_SELF_EMPLOYED:
        'Income statement and balance sheet or tax decision',
      PROFIT_AND_LOSS_STATEMENT_PARTNERSHIP: 'Income statement and balance sheet',
      SALARY: 'Payment vouchers for wages and work compensation',
      PROOF_OF_STUDIES:
        'Study certificate or decision on the unemployment fund\'s study benefit / employment fund\'s training support',
      CHILD_INCOME: 'Evidence of the child\'s income'
    }
  },
  units: {
    name: 'Name',
    area: 'Area',
    address: 'Address',
    city: 'Municipality',
    type: 'Type',
    findByName: 'Search by unit name',
    selectProviderTypes: 'Choose the form of organization',
    selectCareTypes: 'Choose a mode of operation',
    includeClosed: 'Show discontinued units',
    noResults: 'No results'
  },
  unit: {
    serviceWorkerNote: {
      title: 'Service control notes',
      add: 'Set a note'
    },
    tabs: {
      unitInfo: 'Unit information',
      groups: 'Element',
      calendar: 'Calendar',
      applicationProcess: 'Application process'
    },
    create: 'Create new unit',
    openDetails: 'Show all details of the unit',
    occupancies: 'Usage and occupancy rate',
    info: {
      title: 'Unit information',
      area: 'Area',
      visitingAddress: 'Visiting address',
      mailingAddress: 'Postal address',
      phone: 'Telephone number',
      caretakers: {
        titleLabel: 'Staff',
        unitOfValue: 'person'
      }
    },
    manager: {
      title: 'Head of the unit',
      name: 'Name',
      email: 'E-mail address',
      phone: 'Telephone number'
    },
    accessControl: {
      aclRoles: 'Permits',
      activeAclRoles: 'Active authorizations',
      roleChange: 'Role reversal',
      scheduledAclRoles: 'There will be approvals',
      role: 'Role',
      name: 'Name',
      email: 'E-mail address',
      aclStartDate: 'Licensing begins',
      aclEndDate: 'The authorization ends',
      removeConfirmation:
        'Do you want to remove the access right from the selected person?',
      removeScheduledConfirmation: 'Do you want to remove the future authorization?',
      addDaycareAclModal: {
        title: 'Add permission',
        role: 'Choose a role',
        employees: 'Choose a person',
        scheduledAclWarning:
          'The person has a future permit in this unit. Future approval will be removed.'
      },
      editDaycareAclModal: {
        title: 'Edit authorization'
      },
      chooseRole: 'Choose a role',
      choosePerson: 'Choose a person',
      chooseGroup: 'Select a group',
      temporaryEmployees: {
        title: 'Temporary substitutes',
        previousEmployeesTitle: 'Previous temporary substitutes',
        firstName: 'First name',
        firstNamePlaceholder: 'Enter first name',
        lastName: 'Last name',
        lastNamePlaceholder: 'Enter the last name',
        pinCode: 'PIN code',
        pinCodePlaceholder: 'code'
      },
      addTemporaryEmployeeModal: {
        title: 'Add a temporary substitute'
      },
      editTemporaryEmployeeModal: {
        title: 'Edit temporary substitute'
      },
      reactivateTemporaryEmployee: 'Authorize again',
      removeTemporaryEmployeeConfirmation:
        'Do you want to remove the selected person from the list?',
      mobileDevices: {
        mobileDevices: 'The unit\'s mobile devices',
        addMobileDevice: 'Add a mobile device',
        editName: 'Edit the device name',
        removeConfirmation: 'Do you want to remove your mobile device?',
        editPlaceholder: 'e.g. Hippies\' mobile phone'
      },
      groups: 'Permissions for groups',
      noGroups: 'No permits',
      hasOccupancyCoefficient: 'Responsible for education'
    },
    filters: {
      title: 'Show details',
      periods: {
        day: 'Day',
        threeMonths: '3 months',
        sixMonths: '6 months',
        year: 'Year'
      }
    },
    occupancy: {
      display: 'Show',
      fullUnit: 'The whole unit',
      title: 'Unit occupancy',
      subtitles: {
        confirmed: 'Confirmed fill rate',
        planned: 'Planned degree of filling',
        draft: 'Figured fill rate',
        realized: 'Usage rate'
      },
      fail: 'Failed to load fill rate',
      failRealized: 'Failed to load utilization rate',
      maximum: 'Maximum',
      minimum: 'Minimum',
      noValidValues: 'The fill rate could not be calculated for the time interval',
      noValidValuesRealized: 'Occupancy could not be calculated for the time period',
      realtime: {
        modes: {
          REALIZED: 'Realization',
          PLANNED: 'Plan'
        },
        noData: 'No information for the selected date',
        legendTitle: 'Explanations of the markings',
        chartYAxisTitle: 'Children with odds',
        chartY1AxisTitle: 'Staff',
        staffPresent: 'Number of employees',
        staffRequired: 'Necessary employees',
        childrenMax: 'Maximum number of children (with multiplier)',
        childrenPresent: 'Number of children',
        children: 'Number of children (with multiplier)',
        unknownChildren: '+ children without reservation',
        utilization: 'Usage rate'
      }
    },
    staffOccupancies: {
      title: 'Educational responsibility',
      occupancyCoefficientEnabled: 'Let\'s calculate the utilization rate'
    },
    applicationProcess: {
      title: 'Application process'
    },
    placementPlans: {
      title: 'To be confirmed by the guardian',
      name: 'Name',
      birthday: 'Date of birth',
      placementDuration: 'Placed in a unit',
      type: 'Investment type',
      subtype: 'Part/Size',
      application: 'Application'
    },
    placementProposals: {
      acceptAllTitle: 'Selected investment proposals',
      acceptAllSummary: ({
        accepted,
        rejected
      }: {
        accepted: number
        rejected: number
      }) => `${accepted} hyväksytään, ${rejected} hylätään`,
      acceptAllButton: 'Confirm your selections',
      application: 'Application',
      birthday: 'Date of birth',
      citizenHasRejectedPlacement: 'Place abandoned',
      confirmation: 'Seal of approval',
      describeOtherReason: 'Write a justification',
      infoText:
        'Mark the children you can accept. When you have accepted all the children, you can press the Confirm accepted button. If you cannot accept all the children, put a check mark and add a reason. In this case, service management will make a new investment proposal or contact you.',
      infoTitle: 'Marking as accepted / rejected',
      name: 'Name',
      placementDuration: 'Placed in a unit',
      rejectTitle: 'Select the reason for the return',
      rejectReasons: {
        REASON_1:
          'SPACE LIMITATION, agreed with the regional head of early childhood education.',
        REASON_2:
          'OVERALL SITUATION OF THE UNIT, agreed with the regional head of early childhood education.',
        REASON_3: '',
        OTHER: 'Another reason'
      },
      statusLastModified: (name: string, date: string) =>
        `Viimeksi muokattu ${date}. Muokkaaja: ${name}`,
      subtype: 'Part/Size',
      title: 'Investment proposals',
      type: 'Investment type',
      unknown: 'Unknown'
    },
    applications: {
      title: 'Applications',
      child: 'Child\'s name/date of birth',
      guardian: 'Requested guardian',
      type: 'Investment type',
      types: {
        CLUB: 'Club',
        DAYCARE: 'Early childhood education',
        DAYCARE_PART_TIME: 'Early childhood education',
        PRESCHOOL: 'Preschool education',
        PRESCHOOL_DAYCARE: 'Preschool education',
        PREPARATORY: 'Preparatory education',
        PREPARATORY_DAYCARE: 'Preparatory education'
      },
      placement: 'Part/Size',
      preferenceOrder: 'Wish',
      startDate: 'Start',
      status: 'Status',
      extendedCare: 'Shift care'
    },
    transferApplications: {
      title: 'Those who applied for a transfer elsewhere',
      child: 'Child\'s name/date of birth',
      startDate: 'Desire for start date, no investment yet'
    },
    serviceApplications: {
      title: 'Requests for change of service need are waiting to be processed',
      child: 'Child',
      range: 'For the period',
      newNeed: 'A new need',
      currentNeed: 'Current need',
      sentDate: 'Posted'
    },
    placements: {
      title: 'Children waiting for the group',
      name: 'Name',
      birthday: 'Date of birth',
      under3: 'Under 3 years old at the start of the placement',
      over3: 'Over 3 years old at the start of the placement',
      placementDuration: 'Placed in a unit',
      missingGroup: 'The group is missing',
      type: 'Investment type',
      subtype: 'Part/Size',
      addToGroup: 'Group up',
      modal: {
        createTitle: 'Placement of the child in the group',
        transferTitle: 'Transfer of the child to another group',
        child: 'Child to be placed',
        group: 'Group',
        errors: {
          noGroup: 'You have not selected a group or there are no active groups',
          noStartDate: 'You have not selected a start date',
          noEndDate: 'You have not selected an end date',
          groupNotStarted: 'The group hasn\'t started yet',
          groupEnded: 'The group has already been disbanded'
        }
      }
    },
    termination: {
      title: 'Ending investments',
      info: 'The list shows the children whose guardian has given notice of termination during the previous two weeks, or whose transfer application to another unit has been approved by the guardian. Children whose placement is ending for other reasons are not shown on this list.',
      terminationRequestedDate: 'Termination date',
      endDate: 'End date',
      groupName: 'Group'
    },
    calendar: {
      title: 'Calendar',
      noGroup: 'No group',
      shiftCare: 'Shift care',
      staff: 'Staff',
      allChildren: 'All children',
      modes: {
        week: 'Week',
        month: 'Month'
      },
      attendances: {
        title: 'Reservations and attendances'
      },
      nextWeek: 'Next week',
      previousWeek: 'Last week',
      events: {
        title: 'Proceedings',
        createEvent: 'Create another event',
        lastModified: (date: string, name: string) =>
          `Viimeksi muokattu ${date}; muokkaaja: ${name}`,
        lastModifiedAt: 'Last modified',
        lastModifiedBy: 'Adapter',
        edit: {
          title: 'Event',
          saveChanges: 'Save the changes',
          delete: 'Delete event'
        },
        create: {
          title: 'Add a new event',
          text: 'Add here the events that the guardian needs to remember: the event will appear in the guardian\'s eVaka calendar. You should inform the guardian about other events by message.',
          add: 'Add event',
          period: 'Timing',
          attendees: 'Event participants',
          attendeesPlaceholder: 'Select...',
          eventTitle: 'The title of the event',
          eventTitlePlaceholder: 'Max. 30 characters',
          description: 'Event description',
          descriptionPlaceholder:
            'Short instructions for the guardian, e.g. time, what to pack',
          missingPlacementsWarning:
            'Some of the selected children do not have placement in the current unit or are not placed in the selected group during the event. On these days, the child is not listed as a participant and the guardian is not shown the event in the calendar.',
          unorderedMeals: 'Meals not to be ordered',
          meals: {
            BREAKFAST: 'Breakfast',
            LUNCH: 'Lunch',
            SNACK: 'Snack',
            DINNER: 'Dinner',
            SUPPER: 'Supper'
          }
        },
        discussionReservation: {
          calendar: {
            eventTooltipTitle: 'Other events:',
            otherEventSingular: 'other event',
            otherEventPlural: 'another event'
          },
          discussionPageTitle: 'Management of chat times',
          discussionPageDescription:
            'On this page, you can create and monitor surveys that ask for suitable conversation times for guardians.',
          surveyCreate: 'New discussion poll',
          surveyBasicsTitle: 'Basic',
          surveyPeriod: 'Survey duration',
          surveySubject: 'Topic of discussion',
          surveyInvitees: 'Participants in the discussions',
          surveySummary: 'More information for the guardian',
          surveySummaryCalendarLabel: 'More information',
          surveySummaryInfo:
            'This text is shown to the guardian in connection with the inquiry. In it, you can provide more information about the conversations, for example arrival instructions or the time reserved for the conversation.',
          surveySubjectPlaceholder: 'Maximum 30 characters',
          surveySummaryPlaceholder: 'Enter additional information',
          surveyDiscussionTimesTitle: 'Discussion times',
          surveyInviteeTitle: 'Participants',
          editSurveyButton: 'Edit',
          createSurveyButton: 'Send chat times',
          saveSurveyButton: 'Save the changes',
          deleteSurveyButton: 'Remove',
          cancelButton: 'Cancel',
          cancelConfirmation: {
            title: 'Do you want to cancel the changes?',
            text: 'Your changes will not be saved',
            cancelButton: 'Continue editing',
            continueButton: 'Undo changes'
          },
          surveyModifiedAt: 'Adapted',
          surveyStatus: {
            SENT: 'Posted',
            ENDED: 'Ended'
          },
          reservedTitle: 'Booked',
          reserveButton: 'Reserve',
          unreservedTitle: 'Without reservation',
          calendarSurveySummary: (
            link: (text: string) => React.ReactNode
          ): React.ReactNode => (
            <>
              Tarkempia tietoja varten{' '}
              {link('go to the review view of the discussion poll')}
            </>
          ),
          reservationModal: {
            reservationStatus: 'Booking status',
            removeReservation: 'Remove reservation',
            removeDiscussionTime: 'Remove chat time',
            reserved: 'Reserved',
            unreserved: 'Free',
            selectPlaceholder: 'Select',
            inviteeLabel: 'Participant',
            reserveError: 'Booking an appointment failed',
            deleteError: 'Failed to delete chat time',
            deleteConfirmation: {
              title: 'The time to be deleted has already been reserved',
              text: 'Do you want to delete the time and reservation?',
              cancelButton: 'Undo deletion',
              continueButton: 'Remove'
            }
          },
          deleteConfirmation: {
            title: 'Are you sure you want to delete the submitted survey?',
            text: 'All free and booked times will be deleted. This action cannot be undone.',
            error: 'Failed to delete chat poll'
          },
          eventTime: {
            addError: 'Failed to add talk time',
            deleteError: 'Failed to delete chat time'
          },
          reservationClearConfirmationTitle:
            'Will the following bookings be removed?',
          clearReservationButtonLabel: 'Remove reservations'
        },
        reservedTimesLabel: 'reserved',
        freeTimesLabel: 'off'
      }
    },
    groups: {
      title: 'Office groups',
      familyContacts: 'Show contact summary',
      attendanceReservations: 'Attendance reservations',
      create: 'Create a new group',
      createModal: {
        title: 'A new group',
        confirmButton: 'Save',
        cancelButton: 'Cancel',
        name: 'Group name',
        type: 'Type',
        initialCaretakers: 'The number of staff at the start of the group',
        aromiCustomerId: 'Arom\'s responsibility unit code',
        errors: {
          nameRequired: 'The group must have a name',
          aromiWarning:
            'If Arom\'s responsible unit code is missing, group members are not included in the food order',
          initialCaretakersPositive:
            'The number of personnel cannot be negative'
        }
      },
      updateModal: {
        title: 'Edit group information',
        name: 'Name',
        startDate: 'Founded',
        endDate: 'Last day of operation',
        info: 'The group\'s previous information is not retained',
        jamixPlaceholder: 'Jamix customerNumber',
        jamixTitle: 'Customer number for food orders',
        aromiPlaceholder: 'Arom\'s responsibility unit code',
        aromiTitle: 'Responsibility unit code for Aromi food orders',
        nekkuUnitTitle: 'Nekku food orders unit',
        nekkuCustomerNumberTitle: 'Customer number for Nekku food orders'
      },
      nekkuOrderModal: {
        title: 'Nekku food order'
      },
      startDate: 'Founded',
      endDate: 'Last day of operation',
      caretakers: 'Staff',
      childrenLabel: 'Children',
      childrenValue: {
        single: 'child',
        plural: 'spatula'
      },
      childServiceNeedFactor: 'Child multiplier',
      childAssistanceNeedFactor: 'The need for support',
      factor: 'Factor',
      maxOccupancy: 'Maximum fill rate',
      maxRealizedOccupancy: 'Maximum utilization',
      name: 'Name',
      birthday: 'Date of birth',
      placementDuration: 'Placed in a group',
      serviceNeed: 'Need for service',
      serviceNeedChecked: 'Service requirement marked',
      serviceNeedMissing1: 'No need for service (',
      serviceNeedMissing2: 'days)',
      placementType: 'Investment type',
      placementSubtype: 'Part/Size',
      noChildren: 'No children have been placed in the group.',
      returnBtn: 'Restore',
      transferBtn: 'Move',
      diaryButton: 'Open the journal',
      deleteGroup: 'Delete group',
      update: 'Edit information',
      nekkuOrder: 'Nekku order',
      daycareDailyNote: {
        dailyNote: 'Notes of the day',
        header: 'Experienced and learned today',
        groupNotesHeader: 'Group notes',
        stickyNotesHeader: 'Things to note in the coming days',
        notesHint:
          'Games, successes, happy things and things learned today (no health or confidential information).',
        childStickyNoteHint:
          'Note to staff (no health or confidential information).',
        otherThings: 'Other things',
        feedingHeader: 'The child ate today',
        sleepingHeader: 'The child slept today',
        sleepingHoursHint: 'hours',
        sleepingMinutesHint: 'minutes',
        sleepingHours: 't',
        sleepingMinutes: 'min',
        reminderHeader: 'Things to remember',
        otherThingsToRememberHeader: 'Other things to remember (e.g. sunscreen)',
        groupNoteModalLink: 'Group note',
        groupNoteHint: 'A note about the entire group',
        edit: 'Add a note of the day',
        level: {
          GOOD: 'Very',
          MEDIUM: 'Moderately',
          NONE: 'None'
        },
        reminderType: {
          DIAPERS: 'More diapers',
          CLOTHES: 'More clothes',
          LAUNDRY: 'Laundry'
        }
      },
      childDocuments: {
        createModalLink: 'Send the document',
        createModal: {
          title: 'Send a document to multiple recipients',
          template: 'Document',
          placements: 'Recipients'
        }
      }
    },
    backupCares: {
      title: 'Foster children',
      childName: 'Name',
      duration: 'Placed in a unit',
      birthDate: 'Date of birth'
    },
    attendanceReservations: {
      ungrouped: 'Children without a group',
      childName: 'Child\'s name',
      startTime: 'Arrives',
      endTime: 'Leaving',
      requiresBackupCare: 'Make a backup investment',
      openReservationModal: 'Make a recurring booking',
      childCount: 'Children present',
      lastModifiedStaff: (date: string, name: string) => (
        <div>
          <p>*Henkilökunnan tekemä merkintä</p>
          <p>
            Viimeksi muokattu {date}; muokkaaja: {name}
          </p>
        </div>
      ),
      lastModifiedOther: (date: string, name: string) =>
        `Viimeksi muokattu ${date}; muokkaaja: ${name}`,
      reservationModal: {
        title: 'Make a reservation',
        selectedChildren: 'Children for whom the reservation is made',
        dateRange: 'Validity of the reservation',
        dateRangeLabel: 'Make a reservation for days',
        missingDateRange: 'Select Bookable days',
        repetition: 'Type or frequency',
        times: 'Time',
        businessDays: 'Mon-Fri',
        repeats: 'Repeats',
        repetitions: {
          DAILY: 'Daily',
          WEEKLY: 'Weekly',
          IRREGULAR: 'Irregular'
        }
      },
      childDateModal: {
        reservations: {
          title: 'Attendance reservation',
          add: 'Add reservation',
          noTimes: 'Present, time not yet known'
        },
        attendances: {
          title: 'The act of presence',
          add: 'Add a new line'
        },
        absences: {
          title: 'Absence',
          add: {
            BILLABLE: 'Mark the absence of early childhood education',
            NONBILLABLE: 'Mark the absence of a free activity'
          },
          label: {
            BILLABLE: 'Absent from early childhood education, reason:',
            NONBILLABLE: 'Out of free activity, reason:'
          }
        },
        overlapWarning: 'Check for overlap',
        absenceWarning: 'Check absence',
        extraNonbillableAbsence:
          'According to the attendance times, the child was present in a free activity.',
        missingNonbillableAbsence:
          'According to the attendance times, the child was not present in the free activity.',
        extraBillableAbsence:
          'According to attendance times, the child was present in paid early childhood education.',
        missingBillableAbsence:
          'According to attendance times, the child was not present in paid early childhood education.',
        errorCodes: {
          attendanceInFuture: 'Presence cannot be in the future'
        }
      },
      reservationNoTimes: 'In',
      missingHolidayReservation: 'Vacation booking is missing',
      missingHolidayReservationShort: 'Leave is missing',
      fixedSchedule: 'In',
      termBreak: 'No action',
      missingReservation: 'Notification is missing',
      serviceTimeIndicator: '(s)',
      legend: {
        reservation: 'Reservation',
        serviceTime: 'Contract period',
        attendanceTime: 'Arrival/departure time',
        hhmm: 'tt: e.g'
      },
      affectsOccupancy: 'Let\'s calculate the utilization rate',
      doesNotAffectOccupancy: 'Does not count towards occupancy rate',
      inOtherUnit: 'In another unit',
      inOtherGroup: 'In another group',
      createdByEmployee: '*Notation made by staff'
    },
    staffAttendance: {
      startTime: 'income',
      endTime: 'departure',
      summary: 'Summary',
      plan: 'Plan',
      realized: 'Realization',
      hours: 'Hours',
      dailyAttendances: 'Today\'s entries',
      continuationAttendance: '* registration started the previous day',
      addNewAttendance: 'Add a new entry',
      saveChanges: 'Save the changes',
      noGroup: 'No group',
      staffName: 'Name of the employee',
      addPerson: 'Add a person',
      types: {
        PRESENT: 'In',
        OTHER_WORK: 'A work thing',
        TRAINING: 'Training',
        OVERTIME: 'Overtime',
        JUSTIFIED_CHANGE: 'Justified change',
        SICKNESS: 'Other reason (own)',
        CHILD_SICKNESS: 'Other reason (child)'
      },
      incalculableSum:
        'Hours cannot be counted because the last departure time is missing from the day\'s entries.',
      gapWarning: (gapRange: string) => `Kirjaus puuttuu välillä ${gapRange}`,
      openAttendanceWarning: (arrival: string) => `Avoin kirjaus ${arrival}`,
      openAttendanceInAnotherUnitWarning: 'Open enrollment',
      openAttendanceInAnotherUnitWarningCont:
        '. The entry must be closed before adding a new one.',
      personCount: 'The total number of people present',
      personCountAbbr: 'person',
      unlinkOvernight: 'Separate the overnight presence',
      previousDay: 'The previous day',
      nextDay: 'Following day',
      addPersonModal: {
        description:
          'Add a person who is temporarily present and choose whether they are included in the occupancy rate.',
        arrival: 'Arrival time',
        name: 'Name',
        namePlaceholder: 'Surname First name',
        group: 'Group'
      },
      addedAt: 'Entry created',
      modifiedAt: 'Adapted',
      departedAutomatically: 'Auto shut off',
      hasStaffOccupancyEffect: 'Responsible for education'
    },
    error: {
      placement: {
        create: 'The placement in the group failed',
        transfer: 'Placement in another group failed'
      }
    }
  },
  groupCaretakers: {
    info: 'Always create a new staff requirement when the number of staff changes. The announced number is valid for the selected period and affects the occupancy rates of the unit and group.',
    create: 'Create a new staff requirement',
    edit: 'Edit information',
    editActiveWarning:
      'You are editing data for the current period. If the change in the number of personnel falls on another time frame, create a new personnel requirement so that the historical information is preserved.',
    editHistoryWarning:
      'You are editing data for an expired period. If the change in the number of personnel falls on another time frame, create a new personnel requirement so that the historical information is preserved.',
    confirmDelete: 'Are you sure you want to eliminate the need for staff?',
    startDate: 'Starting with',
    endDate: 'Finishing',
    amount: 'The need for staff',
    amountUnit: 'A person',
    status: 'Status',
    conflict:
      'The selected period overlaps with a previously created period. Edit another time period to remove the overlap.'
  },
  personalMobileDevices: {
    title: 'Personal eVaka mobile',
    infoParagraph1:
      'On this page, you can set up a mobile device for your own personal use, with which you can view the information of all your units in eVaka. You can also remove or add more devices if necessary.',
    infoParagraph2:
      'Please make sure that the access code is enabled on all your mobile devices.',
    name: 'Device name',
    addDevice: 'Add a mobile device',
    editName: 'Edit the device name',
    deleteDevice: 'Do you want to remove your mobile device?'
  },
  mobilePairingModal: {
    sharedDeviceModalTitle: 'Add a new mobile device to the unit',
    personalDeviceModalTitle: 'Add a new personal mobile device',
    modalText1: 'Go to the address on a mobile device',
    modalText2: 'and enter the code below into the device.',
    modalText3:
      'Enter the verification code shown on your mobile device in the field below.',
    modalText4:
      'Give the mobile device a name to distinguish it from other mobile devices.',
    namePlaceholder: 'Name'
  },
  invoices: {
    table: {
      title: 'Invoices',
      toggleAll: 'Select all invoices in the area',
      head: 'Principal',
      children: 'Children',
      period: 'Billing period',
      createdAt: 'Draft created',
      nb: 'Note',
      totalPrice: 'Sum',
      status: 'Status',
      replacementInvoice: 'Adjustment invoice'
    },
    buttons: {
      checked: (count: number) =>
        count === 1 ? `${count} lasku valittu` : `${count} laskua valittu`,
      sendInvoice: (count: number): string =>
        count === 1 ? 'Transfer the selected invoice' : 'Transfer the selected invoices',
      resendInvoice: (count: number): string =>
        count === 1
          ? 'Resend the selected invoice'
          : 'Resend the selected invoices',
      createInvoices: 'Create draft invoices',
      deleteInvoice: (count: number): string =>
        count === 1 ? 'Delete the selected invoice' : 'Delete the selected invoices',
      checkAreaInvoices: (customRange: boolean): string =>
        customRange
          ? 'Select invoices from the selected time range and regions'
          : 'Select this month\'s bills from the selected areas',
      individualSendAlertText:
        'Remember to upload previously transferred invoices to the invoicing system before transferring new ones.'
    },
    sendModal: {
      title: 'Transfer the selected invoices',
      invoiceDate: 'Invoice date',
      dueDate: 'Invoice due date'
    },
    resendModal: {
      title: 'Are you sure you want to send the invoices again?',
      text: 'First, make sure carefully that the invoices have not gone into the invoicing system.',
      confirm: 'Yes, I understand what I\'m doing'
    },
    sendSuccess: 'Sending was successful',
    sendFailure: 'Sending failed'
  },
  invoice: {
    status: {
      DRAFT: 'Draft',
      WAITING_FOR_SENDING: 'Let\'s move manually',
      SENT: 'Transferred',
      REPLACEMENT_DRAFT: 'Corrective draft',
      REPLACED: 'Corrected'
    },
    title: {
      DRAFT: 'Invoice draft',
      WAITING_FOR_SENDING: 'Invoice awaiting transfer',
      SENT: 'Forwarded invoice',
      REPLACEMENT_DRAFT: 'Adjustment draft',
      REPLACED: 'Adjusted invoice'
    },
    form: {
      nav: {
        return: 'Go back'
      },
      child: {
        ssn: 'The fun of a child'
      },
      headOfFamily: {
        title: 'Principal',
        fullName: 'Principal',
        ssn: 'The point of the main man',
        codebtorName: 'National debtor',
        codebtorSsn: 'The fun of the national debtor'
      },
      details: {
        title: 'Invoice information',
        status: 'Status',
        range: 'Billing period',
        number: 'Invoice number',
        dueDate: 'Invoice due date',
        account: 'Account',
        accountType: 'Account type',
        agreementType: 'Counting type',
        relatedFeeDecisions: 'Related payment decisions',
        replacedInvoice: 'Replace the bill',
        invoice: 'Invoice',
        revision: (revisionNumber: number) => `Oikaisulasku ${revisionNumber}`,
        replacedBy: (link: React.ReactNode) => (
          <>Tämä lasku on oikaistu. Korvaava lasku: {link}</>
        ),
        replacedByDraft: (link: React.ReactNode) => (
          <>Tälle laskulle on korvaava oikaisuluonnos: {link}</>
        )
      },
      replacement: {
        title: 'Information related to invoice adjustment',
        info: 'You can add information related to the correction here.',
        reason: 'Reason for correction',
        reasons: {
          SERVICE_NEED: 'Wrong service requirement',
          ABSENCE: 'Diary entry',
          INCOME: 'Missing/incorrect income information',
          FAMILY_SIZE: 'Incorrect family size',
          RELIEF_RETROACTIVE: 'Payment exemption, retroactive',
          OTHER: 'Other'
        },
        notes: 'Additional information',
        attachments: 'Appendices',
        sendInfo:
          'When you mark this invoice as transferred, the invoice to be replaced will be marked as corrected!',
        send: 'Mark as moved',
        markedAsSent: 'Marked as moved'
      },
      rows: {
        title: 'Counting lines',
        product: 'Product',
        description: 'Definition',
        unitId: 'Unit',
        daterange: 'Period',
        amount: 'Pcs',
        unitPrice: 'A price',
        price: 'Sum',
        subtotal: 'Invoice amount'
      },
      sum: {
        rowSubTotal: 'The sum of the child\'s rows',
        familyTotal: 'Total family'
      },
      buttons: {
        markSent: 'Mark as moved'
      }
    },
    distinctiveDetails: {
      MISSING_ADDRESS: 'The address is missing'
    },
    openAbsenceSummary: 'Open the absence summary'
  },
  invoiceCorrections: {
    noChildren: 'The person is not the head of any child',
    targetMonth: 'Will be fixed during the billing period',
    nextTargetMonth: 'Next billing period',
    range: 'Period of reason',
    addRow: 'Add a correction line',
    addTitle: 'New correction line',
    editTitle: 'Edit the patch line',
    deleteConfirmTitle: 'Remove the correction line?'
  },
  financeDecisions: {
    handlerSelectModal: {
      title: 'Check the details',
      label: 'The decision maker',
      error: 'Failed to load decision makers, please try again',
      default: 'The decision maker set in the unit\'s information',
      decisionCount: (count: number) =>
        count === 1 ? '1 decision selected' : `${count} päätöstä valittu`,
      resolve: (count: number): string =>
        count === 1 ? 'Confirm and create a decision' : 'Validate and create decisions'
    }
  },
  feeDecisions: {
    table: {
      title: 'Fee decisions',
      head: 'Principal',
      children: 'Children',
      validity: 'Payment decision valid',
      price: 'Sum',
      number: 'Number',
      status: 'Status',
      createdAt: 'Created',
      sentAt: 'Posted',
      difference: {
        title: 'Change',
        value: {
          GUARDIANS: 'Guardians',
          CHILDREN: 'Children',
          INCOME: 'Revenue',
          PLACEMENT: 'Investment',
          SERVICE_NEED: 'Need for service',
          SIBLING_DISCOUNT: 'Sister flight',
          FEE_ALTERATIONS: 'Payment change',
          FAMILY_SIZE: 'Family size',
          FEE_THRESHOLDS: 'Payment settings'
        },
        valueShort: {
          GUARDIANS: 'H',
          CHILDREN: 'L',
          INCOME: 'T',
          PLACEMENT: 'S',
          SERVICE_NEED: 'PT',
          SIBLING_DISCOUNT: 'SA',
          FEE_ALTERATIONS: 'M',
          FAMILY_SIZE: 'P',
          FEE_THRESHOLDS: 'MA'
        }
      },
      annullingDecision: 'Void or terminate decisions for a period of time'
    },
    buttons: {
      checked: (count: number) =>
        count === 1 ? `${count} päätös valittu` : `${count} päätöstä valittu`,
      createDecision: (count: number): string =>
        count === 1 ? 'Create a decision' : 'Create the decisions',
      ignoreDraft: 'Skip the draft',
      unignoreDrafts: (count: number): string =>
        count === 1 ? 'Undo skip' : 'Undo skips',
      markSent: 'Mark as posted',
      close: 'Close without saving',
      save: 'Save the changes',
      errors: {
        WAITING_FOR_MANUAL_SENDING:
          'Some principals have decisions pending manual submission'
      }
    }
  },
  ignoreDraftModal: {
    title: 'Are you sure you want to skip the draft?',
    content: (
      <div>
        <H3>Luonnoksen saa ohittaa vain jos seuraavat asiat pätevät:</H3>
        <ul>
          <li>Luonnos koskee menneisyyttä, ja</li>
          <li>
            Luonnos on väärin, koska menneisyydessä olevat asiakastiedot ovat
            väärin, ja
          </li>
          <li>Samalle ajalle oleva alkuperäinen lähetetty päätös on oikein</li>
        </ul>
        <p>
          Mikäli luonnos on väärin koska tiedot ovat väärin (esim. perhesuhteita
          on takautuvasti poistettu virheellisesti), on tärkeää ensisijaisesti
          pyrkiä korjaamaan tiedot ennalleen, koska ne vaikuttavat myös muihin
          järjestelmiin.
        </p>
        <p>
          Mikäli luonnos on väärin tai tarpeeton, vaikka tiedot ovat oikein, älä
          ohita luonnosta, vaan ole yhteydessä kehittäjätiimiin, jotta vika
          voidaan tutkia ja korjata.
        </p>
      </div>
    ),
    confirm: 'I understand and confirm this'
  },
  valueDecisions: {
    table: {
      title: 'Voucher value decisions',
      head: 'Principal',
      child: 'Child',
      validity: 'Value decision valid',
      totalValue: 'PS Value',
      totalCoPayment: 'Deductible',
      number: 'Number',
      status: 'Status',
      createdAt: 'Created',
      sentAt: 'Posted',
      difference: {
        title: 'Change',
        value: {
          GUARDIANS: 'Guardians',
          INCOME: 'Revenue',
          FAMILY_SIZE: 'Family size',
          PLACEMENT: 'Investment',
          SERVICE_NEED: 'Need for service',
          SIBLING_DISCOUNT: 'Sister flight',
          CO_PAYMENT: 'Deductible before payment changes',
          FEE_ALTERATIONS: 'Payment changes',
          FINAL_CO_PAYMENT: 'Deductible',
          BASE_VALUE: 'Basic value',
          VOUCHER_VALUE: 'Service voucher value',
          FEE_THRESHOLDS: 'Payment settings'
        },
        valueShort: {
          GUARDIANS: 'H',
          INCOME: 'T',
          FAMILY_SIZE: 'P',
          PLACEMENT: 'S',
          SERVICE_NEED: 'PT',
          SIBLING_DISCOUNT: 'SA',
          CO_PAYMENT: 'OM',
          FEE_ALTERATIONS: 'M',
          FINAL_CO_PAYMENT: 'O',
          BASE_VALUE: 'PA',
          VOUCHER_VALUE: 'PS',
          FEE_THRESHOLDS: 'MA'
        }
      },
      annullingDecision: 'Void or terminate decisions for a period of time'
    },
    buttons: {
      checked: (count: number) =>
        count === 1 ? `${count} päätös valittu` : `${count} päätöstä valittu`,
      createDecision: (count: number): string =>
        count === 1 ? 'Create a decision' : 'Create the decisions',
      ignoreDraft: 'Skip the draft',
      unignoreDrafts: (count: number): string =>
        count === 1 ? 'Undo skip' : 'Undo skips',
      markSent: 'Mark as posted',
      close: 'Close without saving',
      save: 'Save the changes',
      errors: {
        WAITING_FOR_MANUAL_SENDING:
          'Some of the children have decisions that await manual submission'
      }
    }
  },
  payments: {
    table: {
      title: 'Dues',
      toggleAll: 'Select all lines matching the search',
      unit: 'Unit',
      period: 'Payment period',
      createdAt: 'Draft created',
      number: 'Invoice no',
      amount: 'Sum',
      status: 'Status',
      nb: 'Note',
      missingPaymentDetails: 'Information is missing'
    },
    buttons: {
      createPaymentDrafts: 'Create payment material',
      checked: (count: number) =>
        count === 1 ? `${count} rivi valittu` : `${count} riviä valittu`,
      confirmPayments: (count: number) =>
        count === 1
          ? `Merkitse ${count} maksu tarkastetuksi`
          : `Merkitse ${count} maksua tarkastetuksi`,
      revertPayments: (count: number) =>
        count === 1
          ? `Palauta ${count} maksu luonnokseksi`
          : `Palauta ${count} maksua luonnoksiksi`,
      sendPayments: (count: number) =>
        count === 1 ? `Siirrä ${count} maksu` : `Siirrä ${count} maksua`,
      deletePayment: (count: number) =>
        count === 1 ? `Poista ${count} maksu` : `Poista ${count} maksua`
    },
    status: {
      DRAFT: 'Draft',
      CONFIRMED: 'Inspected',
      SENT: 'Transferred'
    },
    sendModal: {
      title: 'Transfer selected payments',
      paymentDate: 'Term',
      dueDate: 'Due date'
    },
    distinctiveDetails: {
      MISSING_PAYMENT_DETAILS: 'Payment information is missing'
    }
  },
  placement: {
    type: {
      CLUB: 'Club',
      DAYCARE: 'Early childhood education',
      FIVE_YEARS_OLD_DAYCARE: 'Early childhood education for 5-year-olds',
      PRESCHOOL_WITH_DAYCARE: 'Preschool and related early childhood education',
      PREPARATORY_WITH_DAYCARE: 'Preparatory education and related early childhood education',
      DAYCARE_PART_TIME: 'Part-time early childhood education',
      DAYCARE_FIVE_YEAR_OLDS: 'Early childhood education for 5-year-olds',
      DAYCARE_PART_TIME_FIVE_YEAR_OLDS:
        'Part-time early childhood education for 5-year-olds',
      PRESCHOOL: 'Preschool education',
      PREPARATORY: 'Preparatory teaching',
      PREPARATORY_DAYCARE: 'Preparatory education and related early childhood education',
      PREPARATORY_DAYCARE_ONLY:
        'Early childhood education related to preparatory education',
      PRESCHOOL_DAYCARE: 'Preschool and related early childhood education',
      PRESCHOOL_DAYCARE_ONLY: 'Early childhood education related to preschool education',
      PRESCHOOL_CLUB: 'Preschool club',
      TEMPORARY_DAYCARE: 'Temporary Full-time early childhood education',
      TEMPORARY_DAYCARE_PART_DAY: 'Temporary Part-time early childhood education',
      SCHOOL_SHIFT_CARE: 'Daycare for school children'
    },
    messagingCategory: {
      MESSAGING_CLUB: 'Club',
      MESSAGING_DAYCARE: 'Early childhood education',
      MESSAGING_PRESCHOOL: 'Preschool education'
    },
    defaultOptionText: '(Supposition)',
    defaultOptionMissingText: 'No default service requirement available'
  },
  feeAlteration: {
    DISCOUNT: 'Discount',
    INCREASE: 'Raise',
    RELIEF: 'Relief'
  },
  feeDecision: {
    title: {
      DRAFT: 'Fee decision draft',
      IGNORED: 'Ignored draft payment decision',
      WAITING_FOR_SENDING: 'Payment decision (outgoing)',
      WAITING_FOR_MANUAL_SENDING: 'Payment decision (sent manually)',
      SENT: 'Fee decision',
      ANNULLED: 'Nullified payment decision'
    },
    distinctiveDetails: {
      UNCONFIRMED_HOURS: 'Missing service need',
      EXTERNAL_CHILD: 'Foreigner',
      RETROACTIVE: 'Retrospective decision',
      NO_STARTING_PLACEMENTS: 'Hide new starting children',
      MAX_FEE_ACCEPTED: 'Consent to the highest payment',
      PRESCHOOL_CLUB: 'Preschool club only',
      NO_OPEN_INCOME_STATEMENTS: 'No open income statements'
    },
    status: {
      DRAFT: 'Draft',
      IGNORED: 'Skipped draft',
      WAITING_FOR_SENDING: 'On departure',
      WAITING_FOR_MANUAL_SENDING: 'Sent manually',
      SENT: 'Posted',
      ANNULLED: 'Nullified'
    },
    type: {
      NORMAL: 'Standard payment decision, no relief',
      RELIEF_ACCEPTED: 'Relief accepted (Sent manually)',
      RELIEF_PARTLY_ACCEPTED:
        'Partial' + 'relief approved (Sent manually)',
      RELIEF_REJECTED: 'Relief rejected (Sent manually)'
    },
    headOfFamily: 'Principal',
    partner: 'Second guardian / obligee',
    decisionNumber: 'Decision number',
    validPeriod: 'Payment decision valid',
    sentAt: 'Payment decision sent',
    decisionHandler: 'Decision processor',
    relief: 'Relief from the payment decision',
    waitingManualSending: 'Sent manually',
    pdfLabel: 'Payment decision PDF',
    downloadPdf: 'Download the PDF',
    pdfInProgress:
      '(The PDF is being generated. The page will load in a moment' +
      'again so you can download it from the attached link.)',
    form: {
      nav: {
        return: 'Go back'
      },
      income: {
        title: 'Family income information',
        maxFeeAccepted: 'Guardian\'s consent to the highest payment category.'
      },
      child: {
        ssn: 'Personal identification number',
        placementType: 'Investment type',
        careArea: 'Service area',
        daycare: 'Post',
        placementDate: 'Ranking valid',
        serviceNeed: 'Need for service',
        name: 'Name',
        postOffice: 'Post office'
      },
      summary: {
        title: 'Summary of the basis of the payment decision',
        income: {
          title: 'Summary of family income',
          effect: {
            label: 'Basis of payment',
            MAX_FEE_ACCEPTED:
              'Guardian\'s consent to the highest early childhood education fee',
            INCOMPLETE: 'The family\'s income information is incomplete.',
            INCOME: 'The payment is based on the parents\' income information',
            NOT_AVAILABLE:
              'Payment is based on the highest income category (automatic)'
          },
          details: {
            MAX_FEE_ACCEPTED: 'Consent to the highest early childhood education fee',
            INCOMPLETE: 'Incomplete income information',
            NOT_AVAILABLE: 'No income information has been provided'
          },
          income: 'Revenue',
          expenses: 'Expenditure',
          total: 'Total family income',
          familyComposition: 'Family composition and basis of payment',
          familySize: 'Family size',
          persons: 'person',
          feePercent: 'Payment percentage',
          minThreshold: 'Minimum gross limit'
        },
        parts: {
          title: 'Summary of payments for children in the family',
          siblingDiscount: 'sister flight',
          sum: 'Sum'
        },
        totalPrice: 'The family\'s early childhood education fee in total'
      },
      buttons: {
        saveChanges: 'Save the changes'
      }
    },
    modal: {
      title: 'Do you want to go back without saving changes?',
      cancel: 'Return without saving',
      confirm: 'Continue editing'
    }
  },
  filters: {
    searchTerms: 'Application conditions',
    freeTextPlaceholder:
      'Search by name, nickname, address or payment decision number',
    area: 'Area',
    unit: 'Post',
    financeDecisionHandler: 'Handler of financial decisions',
    unitPlaceholder: 'Select a location',
    financeDecisionHandlerPlaceholder: 'Select an employee',
    distinctiveDetails: 'Other things to consider',
    difference: 'Change',
    providerType: 'Form of organization',
    status: 'Status',
    clear: 'Clear the selections',
    validityPeriod: 'Validity period',
    searchByStartDate: 'The start date is placed in the selected time interval',
    invoiceDate: 'Invoice date',
    invoiceSearchByStartDate: 'Send invoices for the selected period',
    paymentDate: 'Term',
    paymentFreeTextPlaceholder: 'Search by payment number',
    incomeStatementSent: 'Income statement sent',
    incomeStatementPlacementValidDate: 'Ranking valid',
    incomeStatementStatusTitle: 'Show facilities',
    incomeStatementStatus: {
      SENT: 'Awaiting processing',
      HANDLING: 'Processing'
    },
    showClosedUnits: 'Show closed units',
    hideClosedUnits: 'Hide closed units'
  },
  valueDecision: {
    title: {
      DRAFT: 'Voucher value decision draft',
      IGNORED: 'Ignored value judgment draft',
      WAITING_FOR_SENDING: 'Voucher value decision (pending sending)',
      WAITING_FOR_MANUAL_SENDING: 'Value decision (sent manually)',
      SENT: 'Voucher value decision',
      ANNULLED: 'Nullified value judgment'
    },
    headOfFamily: 'Principal',
    partner: 'Second guardian / obligee',
    decisionNUmber: 'Decision number',
    validPeriod: 'Value decision valid',
    sentAt: 'Value decision sent',
    pdfLabel: 'Voucher value decision PDF',
    decisionHandlerName: 'Decision processor',
    relief: 'Easing the value judgment',
    downloadPdf: 'Download the PDF',
    pdfInProgress:
      '(The PDF is being generated. Please reload the page after a while and you can download it from the attached link.)',
    status: {
      DRAFT: 'Draft',
      IGNORED: 'Skipped draft',
      WAITING_FOR_SENDING: 'On departure',
      WAITING_FOR_MANUAL_SENDING: 'Sent manually',
      SENT: 'Posted',
      ANNULLED: 'Nullified'
    },
    type: {
      NORMAL: 'Standard value judgment, no relief',
      RELIEF_ACCEPTED: 'Relief accepted (Sent manually)',
      RELIEF_PARTLY_ACCEPTED:
        'Partial' + 'relief approved (Sent manually)',
      RELIEF_REJECTED: 'Relief rejected (Sent manually)'
    },
    child: {
      name: 'Name',
      ssn: 'Personal identification number',
      postOffice: 'Post office',
      placementType: 'Investment type',
      careArea: 'Service area',
      unit: 'Post',
      serviceNeed: 'Need for service'
    },
    summary: {
      title: 'Summary of the basis of the value decision',
      coPayment: 'Deductible',
      sum: 'Sum',
      siblingDiscount: 'Sibling discount',
      totalValue: 'The value of the service voucher after the deductible',
      income: {
        title: 'Summary of family income',
        effect: {
          label: 'Basis of payment',
          MAX_FEE_ACCEPTED:
            'Guardian\'s consent to the highest early childhood education fee',
          INCOMPLETE: 'The family\'s income information is incomplete.',
          INCOME: 'The payment is based on the parents\' income information',
          NOT_AVAILABLE: 'Payment is based on the highest income category (automatic)'
        },
        details: {
          MAX_FEE_ACCEPTED: 'Consent to the highest early childhood education fee',
          INCOMPLETE: 'Incomplete income information',
          NOT_AVAILABLE: 'No income information has been provided'
        },
        income: 'Revenue',
        expenses: 'Expenditure',
        total: 'Total family income',
        familyComposition: 'Family composition and basis of payment',
        familySize: 'Family size',
        persons: 'person',
        feePercent: 'Payment percentage',
        minThreshold: 'Minimum gross limit'
      },
      value: 'Service voucher value',
      age: {
        LESS_THAN_3: 'Under 3 years old',
        OVER_3: 'At least 3 years old'
      },
      assistanceNeedCoefficient: 'support need factor',
      hoursPerWeek: 'hours a week'
    }
  },
  // these are directly used by date picker so order and naming matters!
  datePicker: {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    weekdaysLong: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    weekdaysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'la', 'Sun']
  },
  absences: {
    title: 'Absences',
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
    missingHolidayReservation: 'The guardian has not confirmed the vacation time reservation',
    missingHolidayQuestionnaireAnswer:
      'The guardian has not answered the absence survey',
    shiftCare: 'Evening/day care',
    requiresBackupCare: 'Waiting for reserve investment',
    additionalLegendItems: {
      CONTRACT_DAYS: 'Contractual service requirement'
    },
    absenceTypesShort: {
      OTHER_ABSENCE: 'Absence',
      SICKLEAVE: 'Disease',
      UNKNOWN_ABSENCE: 'Unannounced',
      PLANNED_ABSENCE: 'Shift work',
      TEMPORARY_RELOCATION: 'Backup placement',
      PARENTLEAVE: 'Senior leave',
      FORCE_MAJEURE: 'Free',
      FREE_ABSENCE: 'Free',
      UNAUTHORIZED_ABSENCE: 'Fine',
      NO_ABSENCE: 'Not gone'
    },
    absenceTypeInfo: {
      OTHER_ABSENCE:
        'It is always used when the guardian has announced an absence, including regular days off and vacation time. Also used in shift units for children\'s holiday markings or other absences that are outside the planned attendance bookings.',
      SICKLEAVE:
        'A continuous sickness absence of more than 11 days lowers the payment.',
      UNKNOWN_ABSENCE:
        'It is used when the guardian has not reported the absence, also affects invoicing in July. The code is only changed if it is a sickness absence, the continuation of which is reported by the guardian the next day.',
      PLANNED_ABSENCE:
        'Only used in shift units, when it comes to time off due to shift work, vacation times are marked with the Absence code. Not entitled to a payment discount with an invoice.',
      TEMPORARY_RELOCATION:
        'A reserve placement has been made for the child in another unit. Absence can be marked, if one is known. However, read the vacation time guidelines if the absence concerns vacation time.',
      PARENTLEAVE:
        'Parental leave is marked only for the child for whom the guardian is on leave, not for siblings. It affects the payment in such a way that time is free.',
      FORCE_MAJEURE:
        'Only used in special situations according to the administration\'s instructions.',
      FREE_ABSENCE: 'Free summer time absence',
      UNAUTHORIZED_ABSENCE: 'Unannounced absence from the emergency room',
      NO_ABSENCE: 'If the child is present, do not mark anything.'
    },
    additionalLegendItemInfos: {
      CONTRACT_DAYS: 'A child who needs services on a contract date'
    },
    careTypes: {
      SCHOOL_SHIFT_CARE: 'Daycare for school children',
      PRESCHOOL: 'Preschool education',
      PRESCHOOL_DAYCARE: 'Connected early childhood education',
      DAYCARE_5YO_FREE: 'Early childhood education for 5-year-olds',
      DAYCARE: 'Early childhood education',
      CLUB: 'Club'
    },
    absenceCategories: {
      NONBILLABLE:
        'Preschool, preparatory, early childhood education for 5-year-olds or club activities',
      BILLABLE: 'Early childhood education (paid)'
    },
    modifiedByStaff: 'Staff',
    modifiedByCitizen: 'Supporter',
    modal: {
      absenceSectionLabel: 'Reason for absence',
      placementSectionLabel: 'The mode of operation affected by the absence',
      saveButton: 'Save',
      cancelButton: 'Cancel',
      absenceTypes: {
        OTHER_ABSENCE: 'Absence',
        SICKLEAVE: 'Disease',
        UNKNOWN_ABSENCE: 'Unannounced absence',
        PLANNED_ABSENCE: 'Shift absence',
        TEMPORARY_RELOCATION: 'Alternately placed elsewhere',
        PARENTLEAVE: 'Parental leave',
        FORCE_MAJEURE: 'Free day (limited use)',
        FREE_ABSENCE: 'Unpaid absence',
        UNAUTHORIZED_ABSENCE: 'Unannounced absence from the emergency room',
        NO_ABSENCE: 'No absence',
        MISSING_HOLIDAY_RESERVATION: 'Holiday notice is missing'
      },
      free: 'Free',
      paid: 'Pay',
      absenceSummaryTitle: 'Child absence summary'
    },
    table: {
      selectAll: 'Select all',
      staffRow: 'Staff on site',
      disabledStaffCellTooltip: 'The group does not exist on the selected date',
      reservationsTotal: 'Booking/month',
      attendancesTotal: 'Implementation/month'
    },
    legendTitle: 'Explanations of the markings',
    addAbsencesButton(numOfSelected: number): string {
      return numOfSelected === 1
        ? 'Add an entry to the selected...'
        : 'Add entries to selected...'
    },
    notOperationDay: 'No action date',
    absence: 'Absence',
    reservation: 'Reservation',
    present: 'In',
    guardian: 'Supporter',
    staff: 'Staff',
    dailyServiceTime: 'Contract period'
  },
  placementDraft: {
    preschoolDaycare: 'Connected early childhood education',
    card: {
      title: 'The highest occupancy rate from the day of the investment',
      titleSpeculated: 'Occupancy rate if the child is placed'
    },
    upcoming: 'Upcoming',
    active: 'Active',
    currentPlacements: 'Existing investments',
    noCurrentPlacements: 'No existing investments',
    addOtherUnit: 'Add another unit',
    placementOverlapError:
      'Previous overlapping placements are automatically cut off if the citizen accepts the offered place.',
    createPlacementDraft: 'Create an investment plan',
    applicationDatesTitle: 'Figured investment',
    drafted: 'Characterized',
    dueDate: 'Legality',
    preferred: 'Wanted',
    datesTitle: 'Investment plan to be created now',
    type: 'Investment type',
    date: 'Investment date',
    dateError: 'Overlapping investment for a period.',
    preparatoryPeriod: 'Preparatory teaching',
    dateOfBirth: 'Date of birth',
    selectUnit: 'Select a unit',
    selectedUnit: 'Selected unit',
    restrictedDetails: 'The guardian has a security ban',
    restrictedDetailsTooltip:
      'The decision must be sent by hand to the other guardian when the applicant has a security ban.'
  },
  decisionDraft: {
    title: 'Decision making and sending',
    info1:
      'By sending the decision, you accept the investment plan. The decisions you have selected below will be sent to the municipality.',
    info2:
      'Please note that selections and dates only affect decision documents. If you want to modify the actual placement, return the application back to the placements and place it again.',
    ssnInfo1:
      'Guardianship cannot be checked without the personal security number of the guardian and the child.',
    ssnInfo2: 'Send the printed decision by mail and mark it as mailed.',
    unitInfo1: 'The unit information is incomplete.',
    unitInfo2:
      'Missing data must be updated before creating decisions. Contact the developers.',
    notGuardianInfo1: 'The guardian of the application is not the guardian of the child.',
    notGuardianInfo2:
      'According to VTJ, the person who is marked as a guardian on the application is not the child\'s guardian. The decision must be sent on paper.',
    unit: 'Post',
    contact: 'Contact person',
    decisionLabelHeading: 'Investment type',
    decisionValueHeading: 'Decision date',
    types: {
      CLUB: 'Club',
      DAYCARE: 'Early childhood education',
      DAYCARE_PART_TIME: 'Part-time early childhood education',
      PRESCHOOL_DAYCARE: 'Early childhood education related to preschool education',
      PRESCHOOL_CLUB: 'Preschool club',
      PRESCHOOL: 'Preschool education',
      PREPARATORY: 'Preparatory teaching',
      PREPARATORY_EDUCATION: 'Preparatory teaching',
      PREPARATORY_DAYCARE: 'Early childhood education related to preparatory education'
    },
    placementUnit: 'Unit selected when placing',
    selectedUnit: 'The unit to be selected for the decision',
    unitDetailsHeading: 'The information displayed in the decision',
    preschoolDecisionName: 'Name of the unit with pre-school decision',
    daycareDecisionName: 'Unit name with early childhood education decision',
    unitManager: 'Head of the unit',
    unitAddress: 'Address of the unit',
    handlerName: 'Handler name',
    handlerAddress: 'Handler address',
    receiver: 'Recipient',
    otherReceiver: 'Recipient (other guardian)',
    missingValue: 'Information is missing.',
    noOtherGuardian: 'There is no other guardian',
    differentUnit:
      'The unit shown in the decision is different from the original placement.'
  },
  reports: {
    title: 'Reports',
    downloadButton: 'Download the report',
    common: {
      orderBy: 'Order',
      total: 'In total',
      totalShort: 'Total',
      careAreaName: 'Service area',
      unitName: 'Unit',
      groupName: 'Group',
      unitType: 'Mode of operation',
      unitTypes: {
        DAYCARE: 'Daycare center',
        FAMILY: 'Family kindergarten',
        GROUP_FAMILY: 'Group family kindergarten',
        CLUB: 'Club'
      },
      unitProviderType: 'Form of organization',
      unitProviderTypes: {
        MUNICIPAL: 'Municipal',
        PURCHASED: 'Purchase service',
        PRIVATE: 'Private',
        MUNICIPAL_SCHOOL: 'Suko',
        PRIVATE_SERVICE_VOUCHER: 'Service voucher',
        EXTERNAL_PURCHASED: 'Purchase service (other)'
      },
      placementType: 'Investment type',
      period: 'Period',
      date: 'Date',
      clock: 'At',
      startDate: 'Starting with',
      endDate: 'Finishing',
      firstName: 'First name',
      lastName: 'Last name',
      childName: 'Child\'s name',
      child: 'Child',
      under3y: '<3 years',
      over3y: '3+',
      age: 'Age',
      dateOfBirth: 'Date of birth',
      attendanceType: 'Presence',
      attendanceTypes: {
        RESERVATION: 'Reservation',
        REALIZATION: 'Realization'
      }
    },
    applications: {
      title: 'Applications received',
      description:
        'The report lists received and pending applications by unit.',
      ageInfo: 'The child\'s age is calculated on the last day of the selected period',
      preferredStartingDate: 'Start date',
      under3Years: 'Stable applications (less than 3 years)',
      over3Years: 'Vaka applications (over 3 years)',
      preschool: 'Preschool applications',
      club: 'Club applications',
      totalChildren: 'Total number of children applied for'
    },
    childDocumentDecisions: {
      title: 'I support the decisions',
      description: 'Support decisions sent to the decision maker.',
      statusFilter: 'Displayed spaces',
      otherFilters: 'Other choices',
      includeEnded: 'Also show completed decisions',
      templateName: 'Decision',
      childName: 'Child',
      modifiedAt: 'Adapted',
      decisionMaker: 'The decision maker',
      decisionMade: 'Decision made',
      status: 'Status'
    },
    decisions: {
      title: 'Decisions',
      description: 'The report lists the decisions made by unit.',
      ageInfo: 'The child\'s age is calculated on the day the decision is sent',
      sentDate: 'Date of sending the decision',
      daycareUnder3: 'Stable decisions (less than 3 years)',
      daycareOver3: 'Stable decisions (more than 3 years)',
      preschool: 'Preschool decisions',
      preschoolDaycare: 'Preschool + related decisions',
      connectedDaycareOnly: 'Later applied for related decisions',
      preparatory: 'To prepare decisions',
      preparatoryDaycare: 'Making+joining decisions',
      club: 'Club decisions',
      preference1: '1. wish',
      preference2: '2nd wish',
      preference3: '3rd wish',
      preferenceNone: 'Not as a wish',
      total: 'Total decisions'
    },
    raw: {
      title: 'Raw report',
      description:
        'Extensive data material that has been processed to a lesser extent, from which you can create different reports yourself.'
    },
    attendanceReservation: {
      title: 'Daily arrival and departure times for the child',
      description:
        'Report on children\'s reservations and staffing needs',
      ungrouped: 'Children waiting for the group',
      capacityFactor: 'Calculator',
      staffCount: 'The platoon',
      tooLongRange: 'You can request a report for a maximum of two months.'
    },
    attendanceReservationByChild: {
      title: 'Child-specific attendance times',
      description:
        'The report lists the departure and arrival times reported by the guardians for each child. The report is available by group and unit.',
      ungrouped: 'Children waiting for the group',
      orderByOptions: {
        start: 'Arrival time',
        end: 'Departure time'
      },
      absence: 'Absence',
      noReservation: 'Booking is missing',
      filterByTime: 'Filter by time',
      showOnlyShiftCare: 'Show daycare only',
      includeClosed: 'Show discontinued units and groups',
      reservationStartTime: 'Income',
      reservationEndTime: 'Departure',
      timeFilterError: 'Error'
    },
    childAttendance: {
      title: 'Child\'s presence and absence information',
      range: 'Interval',
      date: 'Day',
      reservations: 'Reservation',
      attendances: 'Presence',
      absenceBillable: 'Absence (paid)',
      absenceNonbillable: 'Absence (free of charge)'
    },
    customerFees: {
      title: 'Customer fees',
      description: 'Report on the sums of customer fees per child.',
      date: 'Date',
      area: 'Service area',
      unit: 'Unit',
      providerType: 'Form of organization',
      placementType: 'Investment type',
      type: 'Decision type',
      types: {
        FEE_DECISION: 'Fee decisions',
        VOUCHER_VALUE_DECISION: 'Voucher value decisions'
      },
      fee: 'Payment per child',
      count: 'Number'
    },
    duplicatePeople: {
      title: 'Multiplied municipal citizens',
      description:
        'The report lists and allows you to connect people who appear to be in the system multiple times.',
      moveFrom: 'Transfer data',
      moveTo: 'Move here',
      confirmMoveTitle:
        'Are you sure you want to transfer all the data to another person?',
      confirmDeleteTitle: 'Are you sure you want to delete this person?',
      errorTitle: 'Failed to transfer data',
      errorText:
        'Check that the persons do not have, for example, overlapping investments, service needs or other overlaps that could prevent the merger.',
      columns: {
        'absence.child_id': 'Away conditions',
        'absence.modified_by_guardian_id': 'Self-marked absent conditions',
        'absence_application.child_id': 'Preschool absence applications',
        'application.child_id': 'Applications (as a child)',
        'application.guardian_id': 'Applications (as guardian)',
        'application.other_guardian_id': 'Applications (as second guardian)',
        'assistance_action.child_id': 'Support actions',
        'assistance_need.child_id': 'Support needs',
        'assistance_need_decision.child_id': 'I support necessary decisions',
        'assistance_need_decision_guardian.person_id':
          'I support the decision as a guardian',
        'assistance_need_voucher_coefficient.child_id':
          'I support service voucher multipliers',
        'attachment.uploaded_by_person': 'Attachments',
        'attendance_reservation.child_id': 'Attendance bookings',
        'attendance_reservation.created_by_guardian_id':
          'Self-marked attendance bookings',
        'backup_care.child_id': 'Backup investments',
        'backup_pickup.child_id': 'Reserve applicants',
        'calendar_event_attendee.child_id': 'As a calendar participant',
        'child_attendance.child_id': 'Attendance',
        'child_images.child_id': 'Pictures',
        'backup_curriculum_document.child_id': 'Old curricula',
        'daily_service_time.child_id': 'Early education times',
        'daily_service_time_notification.guardian_id':
          'Notifications for early childhood education',
        'daycare_daily_note.child_id': 'Notes',
        'family_contact.child_id': 'Contact persons (child)',
        'family_contact.contact_person_id': 'Contact persons (adult)',
        'fee_alteration.person_id': 'Payment changes',
        'fee_decision.head_of_family_id': 'Payment decisions (principal)',
        'fee_decision.partner_id': 'Payment decisions (spouse)',
        'fee_decision_child.child_id': 'Payment decision lines',
        'fridge_child.child_id': 'Head men',
        'fridge_child.head_of_child': 'Refrigerator- children',
        'fridge_partner.person_id': 'Refrigerator spouses',
        'foster_parent.child_id': 'Foster children',
        'foster_parent.parent_id': 'Surrogate parents',
        'holiday_questionnaire_answer.child_id': 'Survey answers',
        'income.person_id': 'Income information',
        'income_statement.person_id': 'Income notifications',
        'invoice.codebtor': 'Invoices (with -debtor)',
        'invoice.head_of_family': 'Invoices',
        'invoice_correction_row.child_id': 'Invoice correction lines (child)',
        'invoice_correction_row.head_of_family':
          'Invoice correction lines (principal)',
        'invoice_row.child': 'Counting lines',
        'koski_study_right.child_id': 'It was about study rights',
        'nekku_special_diet_choices.child_id': 'Nekku special diet',
        'pedagogical_document.child_id': 'Pedagogical documents',
        'placement.child_id': 'Investments',
        'service_application.child_id': 'Need for services applications (as a child)',
        'service_application.person_id': 'Service need applications (as a guardian)',
        'varda_child.person_id': 'Varda child',
        'varda_service_need.evaka_child_id': 'Varda service needs',
        'backup_vasu_document.child_id': 'Old foals',
        'voucher_value_decision.child_id': 'Value decision lines',
        'voucher_value_decision.head_of_family_id': 'Value decisions (principal)',
        'voucher_value_decision.partner_id': 'Value decisions (spouse)',
        'message.sender_id': 'Sent messages',
        'message_content.author_id': 'Written message contents',
        'message_recipients.recipient_id': 'Received messages',
        'message_draft.account_id': 'Message drafts'
      }
    },
    familyConflicts: {
      title: 'Family conflicts',
      description:
        'The report lists principals with conflicts in their family relationships. A conflict may arise if the family relationships stated in the application are in conflict with previous information.',
      name: 'Principal\'s name',
      ssn: 'Hetu',
      partnerConflictCount: 'Conflicts in spouses',
      childConflictCount: 'Conflicts in children'
    },
    familyContacts: {
      date: 'Date',
      name: 'Child\'s name',
      ssn: 'Hetu',
      group: 'Group',
      address: 'Address',
      headOfChild: 'Principal',
      guardian1: 'Supporter',
      guardian2: 'Another guardian',
      phone: 'Telephone number',
      email: 'E-mail address'
    },
    familyDaycareMealCount: {
      title: 'Meal report of children in family daycare',
      description:
        'The report calculates the attendance records of children in family daycare during mealtimes and groups the results by unit and region.',
      childName: 'Child\'s name',
      firstName: 'First name',
      lastName: 'Last name',
      daycareName: 'Operating unit',
      timePeriod: 'Period',
      timePeriodTooLong: 'Period of maximum 6 months',
      careArea: 'Service area',
      total: 'In total',
      breakfastCountHeader: 'Breakfast',
      lunchCountHeader: 'Lunch',
      snackCountHeader: 'Snack',
      totalHeader: 'Total meals',
      noCareAreasFound: 'No service areas with results',
      noDaycaresFound: 'No units with results'
    },
    endedPlacements: {
      title: 'Children who drop out of early childhood education',
      description:
        'A report to be submitted to Kela about children who quit early childhood education and who may continue later.',
      ssn: 'Hetu',
      placementEnd: 'Stop in early childhood education',
      unit: 'Unit',
      area: 'Area',
      nextPlacementStart: 'Continue in early childhood education',
      nextPlacementUnitName: 'Continue in the unit'
    },
    missingHeadOfFamily: {
      title: 'Missing principals',
      description:
        'The report lists children for whom information about the principal is missing during the current placement.',
      childLastName: 'Child\'s last name',
      childFirstName: 'Child\'s first name',
      showFosterChildren: 'Also show foster children',
      daysWithoutHeadOfFamily: 'Missing days'
    },
    missingServiceNeed: {
      title: 'Missing service needs',
      description:
        'The report lists the children whose service needs are missing during the placement.',
      daysWithoutServiceNeed: 'Missing days',
      defaultOption: 'Default service requirement used'
    },
    invalidServiceNeed: {
      title: 'Incorrect service needs',
      description:
        'The report lists the service needs that appear to have an error.',
      unit: 'Current unit',
      noCurrentUnit: 'Through'
    },
    partnersInDifferentAddress: {
      title: 'Spouse at different address',
      description:
        'The report lists the persons whose refrigerator spouse lives at a different address according to VTJ. Check if these people are really common-law partners anymore.',
      person1: 'Person',
      address1: 'Address',
      person2: 'Spouse',
      address2: 'Spouse\'s address'
    },
    serviceNeeds: {
      title: 'Children\'s service needs and ages in the units',
      description:
        'The report lists the number of children in the units according to service need and age.',
      age: 'Age',
      fullDay: 'Full time',
      partDay: 'Part-time',
      fullWeek: 'the whole week',
      partWeek: 'semi-weekly',
      shiftCare: 'daycare',
      missingServiceNeed: 'the need for service is missing',
      total: 'children in total'
    },
    exceededServiceNeed: {
      title: 'Exceeding service requirements',
      description:
        'The report lists children whose hours of service need have been exceeded.',
      serviceNeedHours: 'Need for service (h)',
      usedServiceHours: 'Used (h)',
      groupLinkHeading: 'The unit\'s weekly calendar',
      excessHours: 'Overrun (h)'
    },
    units: {
      title: 'Units',
      description: 'Summary of unit information.',
      name: 'Name',
      careAreaName: 'Service area',
      careTypeCentre: 'Daycare center',
      careTypeFamily: <span>Perhe&shy;päivä&shy;hoito</span>,
      careTypeFamilyStr: 'Family day care',
      careTypeGroupFamily: <span>Ryhmä&shy;perhe&shy;päivä&shy;hoito</span>,
      careTypeGroupFamilyStr: 'Group family daycare',
      careTypeClub: 'Club',
      careTypePreschool: 'Preschool education',
      careTypePreparatoryEducation: 'Preparatory education',
      clubApply: <span>Kerho&shy;haku</span>,
      clubApplyStr: 'Club search',
      daycareApply: <span>Päiväkoti&shy;haku</span>,
      daycareApplyStr: 'Kindergarten search',
      preschoolApply: <span>Esiopetus&shy;haku</span>,
      preschoolApplyStr: 'Preschool search',
      providerType: 'Form of organization',
      uploadToVarda: 'Varda',
      uploadChildrenToVarda: 'Varda (children)',
      uploadToKoski: 'Rapids',
      ophUnitOid: 'Location OID',
      ophOrganizerOid: 'Organizer OID',
      invoicedByMunicipality: 'Billing from eVaka',
      costCenter: 'Place of issue',
      address: 'Visiting address',
      postOffice: 'Post office',
      unitManagerName: 'Head of the unit',
      unitManagerPhone: 'Director\'s tel.',
      unitManagerEmail: 'Manager\'s email',
      preschoolManagerName: 'The unit\'s head of pre-school education',
      preschoolManagerPhone: 'The head of preschool education\'s tel.',
      preschoolManagerEmail: 'Email of the Director of Preschool Education',
      providesShiftCare: 'Offers round-the-clock care',
      capacity: 'Computational capacity'
    },
    childrenInDifferentAddress: {
      title: 'Child at a different address',
      description:
        'The report lists the principals whose refrigerator child lives at a different address, according to VTJ. Some of these may be errors that should be corrected.',
      person1: 'Principal',
      address1: 'Principal\'s address',
      person2: 'Child',
      address2: 'Child\'s address'
    },
    childAgeLanguage: {
      title: 'Children\'s languages ​​and ages in the units',
      description:
        'The report lists the number of children in the units by language and age. Only accepted places will be considered.'
    },
    childDocuments: {
      title: 'Pedagogical documents report',
      description:
        'The report shows the current situation of pedagogical documents in the units you have selected.',
      info: 'The numbers tell how many children have one of the selected documents in that space.',
      info2:
        'Only those children for whom it is possible to create one of the selected documents are counted in the "No documents" and "Total children" columns.',
      filters: {
        units: 'Units',
        templates: 'Documentation'
      },
      table: {
        unitOrGroup: 'Unit/Group',
        draft: 'Draft',
        prepared: 'Prepared',
        completed: 'Ready',
        none: 'No documents',
        total: 'Total children',
        expand: 'Show groups',
        collapse: 'Hide groups'
      },
      categories: {
        VASU: 'Basket',
        LEOPS_HOJKS: 'Leops/Hojks',
        OTHER: 'Other documents'
      }
    },
    assistanceNeedsAndActions: {
      title: 'Child support needs and support measures',
      description:
        'The report lists the number of children in units and groups according to the basis of the need for support and support measures. Only accepted places will be considered.',
      type: 'Level of support',
      types: {
        DAYCARE: 'in early childhood education',
        PRESCHOOL: 'in preschool education'
      },
      placementType: 'Investment type',
      level: 'Support level and other actions',
      showZeroRows: 'Show zero rows',
      decisionDocuments: 'View the decision documents',
      groupingTypes: {
        NO_GROUPING: 'Children',
        AREA: 'Operational units by region',
        UNIT: 'Operating units'
      },
      basisMissing: 'The reason is missing',
      action: 'Support action',
      actionMissing: 'Support action is missing',
      assistanceNeedVoucherCoefficient: 'Increased PS factor'
    },
    occupancies: {
      title: 'Occupancy and utilization rates',
      description:
        'The report provides information on the utilization or occupancy rates of one service area and one month.',
      filters: {
        areaPlaceholder: 'Select a service area',
        unitPlaceholder: 'Select a unit',
        type: 'Type',
        types: {
          UNITS: {
            CONFIRMED: 'Confirmed filling level in the unit',
            PLANNED: 'Planned filling level in the unit',
            DRAFT: 'Depicted filling level in the unit',
            REALIZED: 'Utilization rate in the unit'
          },
          GROUPS: {
            CONFIRMED: 'Confirmed fill rate in groups',
            PLANNED: 'Planned occupancy rate in groups',
            DRAFT: 'Figured fill rate in groups',
            REALIZED: 'Usage rate in groups'
          }
        },
        valueOnReport: 'Show details',
        valuesOnReport: {
          percentage: 'In percentages',
          headcount: 'In number',
          raw: 'Amount and number of breeders separately'
        }
      },
      unitsGroupedByArea: 'Operational units by region',
      average: 'Average',
      sumUnder3y: 'Under 3 years',
      sumOver3y: 'More than 3 years',
      sum: 'Sum',
      caretakers: 'Breeders',
      missingCaretakersLegend: 'the number of breeders is missing'
    },
    incompleteIncomes: {
      title: 'Missing income information',
      description:
        'Report on parents whose income information has expired, but the child still has an active investment.',
      validFrom: 'Start date',
      fullName: 'Name',
      daycareName: 'Daycare center',
      careareaName: 'Service area'
    },
    invoices: {
      title: 'Reconciliation of invoices',
      description:
        'Invoice reconciliation report to the invoicing system for comparison',
      period: 'Billing period',
      areaCode: 'Area',
      amountOfInvoices: 'Invoices',
      totalSumCents: 'Sum',
      amountWithoutSSN: 'Useless',
      amountWithoutAddress: 'Unaddressed',
      amountWithZeroPrice: 'Zero bills'
    },
    nekkuOrders: {
      title: 'Nekku orders',
      description: 'Report on completed Nekku orders',
      tooLongRange:
        'You can request a report for a maximum of one month.',
      sku: 'Product number',
      quantity: 'Number',
      mealTime: 'Meal time',
      mealType: 'Diet',
      mealTimeValues: {
        BREAKFAST: 'Breakfast',
        LUNCH: 'Lunch',
        SNACK: 'Snack',
        DINNER: 'Dinner',
        SUPPER: 'Supper'
      },
      mealTypeValues: {
        DEFAULT: 'Mixed',
        VEGAN: 'Vegan',
        VEGETABLE: 'Vegetable'
      },
      specialDiets: 'Special diets',
      nekkuOrderInfo: 'Order info',
      nekkuOrderTime: 'Date of order'
    },
    startingPlacements: {
      title: 'Children starting early childhood education',
      description:
        'A report to be submitted to Kela on children starting early childhood education.',
      ssn: 'Hetu',
      childLastName: 'Child\'s last name',
      childFirstName: 'Child\'s first name',
      placementStart: 'Starts in early childhood education',
      reportFileName: 'starting_rankings'
    },
    voucherServiceProviders: {
      title: 'Service voucher units',
      description:
        'Service voucher amounts and child-specific payments apply to service voucher units.',
      filters: {
        areaPlaceholder: 'Select a service area',
        allAreas: 'All areas',
        unitPlaceholder: 'Search by unit name',
        separate: 'Basic and upgrade parts separately'
      },
      locked: 'Report locked',
      childCount: 'No. of PS children',
      sumBeforeAssistanceNeed: 'Amount of the basic part / month',
      assistanceNeedSum: 'Amount of the increase part / month',
      unitVoucherSum: 'PS amount / month',
      average: 'Average',
      breakdown: 'Breakdown'
    },
    voucherServiceProviderUnit: {
      title: 'Service voucher children in the unit',
      unitPageLink: 'Unit page',
      month: 'Month',
      total: 'The amount of service vouchers in the selected month',
      child: 'Child\'s name / date of birth time',
      childFirstName: 'First name',
      childLastName: 'Last name',
      note: 'Attention',
      numberOfDays: 'Days',
      start: 'Starting with',
      end: 'Finishing',
      serviceVoucherValue: 'Ps the highest value',
      serviceVoucherRealizedValueBeforeAssistanceNeed: 'Basic part / month',
      serviceVoucherRealizedAssistanceNeedValue: 'Increase part / month',
      serviceVoucherRealizedValue: 'Ps value / month',
      serviceVoucherFinalCoPayment: 'Deductible',
      serviceNeed: 'Need for service',
      assistanceNeed: 'The need for support',
      partTime: 'Part/Size',
      type: {
        NEW: 'A new decision',
        REFUND: 'Credit',
        CORRECTION: 'Repair'
      }
    },
    nonSsnChildren: {
      title: 'Careless children',
      description:
        'Report of childless placed children to verify OID information',
      childName: 'Child\'s name',
      dateOfBirth: 'Birthday',
      personOid: 'The child\'s data OID',
      lastSentToVarda: 'Last taken to Varda',
      lastSentToKoski: 'Taken to Koski last time',
      total: 'In total'
    },
    placementCount: {
      title: 'Number of investments',
      description:
        'Report on the number of investments in the units according to the application criteria on the given date',
      noCareAreasFound: 'No service areas containing investments',
      examinationDate: 'Review date',
      careArea: 'Service area',
      daycaresByArea: 'Operational units by region',
      placementCount: 'Total children',
      calculatedPlacements: 'Calculated quantity',
      providerType: 'Form of organization',
      placementType: 'Investment type',
      placementsOver3: 'At least 3 years',
      placementsUnder3: 'Under 3 years',
      total: 'In total'
    },
    placementGuarantee: {
      title: 'Early childhood education place guarantee',
      description:
        'The report shows the children who are guaranteed a place in early childhood education'
    },
    placementSketching: {
      title: 'Outline report for pre-school placements',
      description:
        'A report on received preschool education applications to help with placement',
      placementStartDate: 'Review date of current placement',
      earliestPreferredStartDate: 'The earliest requested start date',
      preferredUnit: 'Application request',
      currentUnit: 'Current unit',
      streetAddress: 'Address',
      postalCode: 'Postcode',
      tel: 'Call',
      email: 'email',
      dob: 'Date of birth',
      serviceNeedOption: 'Need for service',
      assistanceNeed: 'The need for support',
      preparatory: 'Preparatory education',
      siblingBasis: 'Sibling basis',
      connected: 'Related',
      applicationStatus: 'Application status',
      preferredStartDate: 'Desired start date',
      sentDate: 'Date of dispatch',
      otherPreferredUnits: 'Other application wishes',
      additionalInfo: 'Additional information',
      childMovingDate: 'The child\'s moving date',
      childCorrectedStreetAddress: 'The child\'s new street address',
      childCorrectedPostalCode: 'The child\'s new postal code',
      childCorrectedCity: 'The child\'s new post office',
      applicationSentDateRange: 'Application sent in between'
    },
    vardaChildErrors: {
      title: 'Varda child errors',
      ma003: {
        include: 'Include MA003 errors',
        exclude: 'Hide MA003 errors',
        only: 'Show only MA003 errors'
      },
      description: 'Errors in Varda children\'s updates',
      updated: 'Last updated',
      age: 'Age (days)',
      child: 'Child',
      error: 'Error',
      updateChild: 'Re-export'
    },
    vardaUnitErrors: {
      title: 'Varda unit errors',
      description: 'Errors in Varda unit updates',
      age: 'Error age (days)',
      unit: 'Unit',
      error: 'Error'
    },
    titaniaErrors: {
      title: 'Titania bugs',
      description: 'Errors found in queue lists imported from Titania',
      header: 'Titania export',
      date: 'Date',
      shift1: 'First turn',
      shift2: 'Overlapping shift'
    },
    sextet: {
      title: 'Six comparison',
      description:
        'Report on the year\'s realized attendance days by unit and by investment type',
      placementType: 'Investment type',
      year: 'Year',
      unitName: 'Unit',
      attendanceDays: 'Actual attendance days'
    },
    invoiceGeneratorDiff: {
      title: 'Differences between calculators',
      description:
        'A tool for analyzing the new calculator vs the old calculator',
      report: 'Report on differences between calculators'
    },
    futurePreschoolers: {
      title: 'Future preschoolers',
      description:
        'Report on the coming year\'s pre-school children and units for the automatic placement tool',
      futurePreschoolersCount: (count: number) =>
        count === 1
          ? `${count} tuleva esikoululainen`
          : `${count} tulevaa esikoululaista`,
      preschoolUnitCount: (count: number) =>
        count === 1
          ? `${count} esiopetusta antava yksikkö`
          : `${count} esiopetusta antavaa yksikköä`,
      sourceUnitCount: (count: number) =>
        count === 1
          ? `${count} tulevien esikoululaisten nykyinen yksikkö`
          : `${count} tulevien esikoululaisten nykyistä yksikköä`
    },
    meals: {
      title: 'Diner numbers',
      description:
        'Calculates the number of diners per unit based on reservations.',
      wholeWeekLabel: 'All week',
      jamixSend: {
        button: 'Resubmit to Jamix',
        confirmationTitle: 'Are food orders resubmitted to Jamix?'
      },
      mealName: {
        BREAKFAST: 'Breakfast',
        LUNCH: 'Lunch',
        LUNCH_PRESCHOOL: 'Lunch (preschool)',
        SNACK: 'Snack',
        SUPPER: 'Dinner',
        EVENING_SNACK: 'Supper'
      },
      headings: {
        mealName: 'Meal',
        mealId: 'Meal identifier',
        mealCount: 'number of pcs',
        dietId: 'Special Diet Identifier',
        dietAbbreviation: 'Erv. abbreviation',
        mealTextureId: 'Food structure identifier',
        mealTextureName: 'Food texture',
        additionalInfo: 'Additional information'
      }
    },
    preschoolAbsences: {
      title: 'Preschool absence report',
      description:
        'The report lists the child-specific absences for the selected unit and group during the preschool period',
      firstName: 'First name',
      lastName: 'Last name',
      daycareName: 'Unit',
      groupName: 'Group',
      hours: '(hours)',
      total: 'In total',
      filters: {
        areaSelection: {
          label: 'Area:',
          placeHolder: 'Select an area'
        },
        daycareSelection: {
          label: 'Preschool unit:',
          placeholder: 'Select a unit'
        },
        groupSelection: {
          label: 'Group:',
          placeholder: 'Select a group'
        },
        preschoolTerm: {
          label: 'Preschool period:',
          placeholder: 'Choose a pre-school period'
        },
        includeClosed: 'Show discontinued units and groups'
      }
    },
    preschoolApplications: {
      title: 'Proposed EO Report',
      description:
        'The report shows the applications included in the proposed pre-school place decision process',
      columns: {
        applicationUnitName: 'Unit',
        childLastName: 'Last name',
        childFirstName: 'First name',
        childDateOfBirth: 'Date of birth',
        childStreetAddress: 'Postal address',
        childPostalCode: 'Postal no',
        childPostalCodeFull: 'Postcode',
        currentUnitName: 'Current unit',
        isDaycareAssistanceNeed: 'The need for support'
      }
    },
    holidayPeriodAttendance: {
      title: 'Holiday survey report',
      description: 'Day-level monitoring of the unit\'s attendance during the leave survey',
      periodFilter: 'Vacation survey',
      periodFilterPlaceholder: 'Select a holiday survey',
      unitFilter: 'Unit',
      groupFilter: 'Group selection',
      groupFilterPlaceholder: 'The whole unit',
      fetchButton: 'Search',
      dateColumn: 'Day',
      presentColumn: 'On the spot',
      assistanceColumn: 'Support workers from those present',
      occupancyColumn: 'Total on site (multiplier)',
      occupancyColumnInfo:
        'The coefficient of all present children is added to the coefficient. The factor is influenced by, for example, the age of the child and the need for support.',
      staffColumn: 'Mr. Municipality\'s need',
      absentColumn: 'Away',
      noResponseColumn: 'Didn\'t answer',
      moreText: 'more'
    },
    holidayQuestionnaire: {
      title: 'Absence survey report',
      description:
        'Day-level monitoring of the unit\'s attendance during the absence survey',
      questionnaireFilter: 'Absence survey',
      questionnaireFilterPlaceholder: 'Select an absence survey',
      unitFilter: 'Unit',
      groupFilter: 'Group selection',
      groupFilterPlaceholder: 'The whole unit',
      fetchButton: 'Search',
      dateColumn: 'Day',
      presentColumn: 'On the spot',
      assistanceColumn: 'Support workers from those present',
      occupancyColumn: 'Total on site (multiplier)',
      occupancyColumnInfo:
        'The coefficient of all present children is added to the coefficient. The factor is influenced by, for example, the age of the child and the need for support.',
      staffColumn: 'Mr. Municipality\'s need',
      absentColumn: 'Away',
      noResponseColumn: 'Didn\'t answer',
      moreText: 'more'
    },
    tampereRegionalSurvey: {
      title: 'Regional survey of the Tampere area',
      description:
        'The report collects the information needed for the municipality\'s annual regional survey as downloadable CSV files',
      monthlyReport: 'The monthly amounts of the regional survey',
      ageStatisticsReport: 'Age distributions of the regional survey',
      yearlyStatisticsReport: 'The annual amounts of the regional survey',
      municipalVoucherReport:
        'Amounts of regional survey service vouchers per location municipality',
      reportLabel: 'Regional survey',
      monthlyColumns: {
        month: 'Month',
        municipalOver3FullTimeCount:
          'Number of children aged 3 and over in full-time early childhood education',
        municipalOver3PartTimeCount:
          'Number of children aged 3 and over in part-time early childhood education',
        municipalUnder3FullTimeCount:
          'Number of children under 3 years old in full-time early childhood education',
        municipalUnder3PartTimeCount:
          'Number of children under 3 years old in part-time early childhood education',
        familyUnder3Count: 'Number of children under 3 years old in family day care',
        familyOver3Count: 'Number of children aged 3 and over in family day care',
        municipalShiftCareCount: 'The number of people in shift care',
        assistanceCount:
          'Children with enhanced and special support / Children who need support for secretion or growth and learning',
        statDay: '(situation on the last day of the month)'
      },
      ageStatisticColumns: {
        voucherUnder3Count: 'The number of service voucher places under 3 years',
        voucherOver3Count: 'Number of service voucher places for 3 years and over',
        purchasedUnder3Count: 'Number of purchase service positions under 3 years',
        purchasedOver3Count: '3 years and over number of purchase service positions',
        clubUnder3Count: 'Number of club places under 3 years',
        clubOver3Count: '3 years and over number of club places',
        nonNativeLanguageUnder3Count: 'Number of foreign languages ​​under 3 years old',
        nonNativeLanguageOver3Count: '3 years and over number of foreign languages',
        effectiveCareDaysUnder3Count: 'Care days for children under 3 years of age',
        effectiveCareDaysOver3Count: '3 years and older care days for early childhood education',
        effectiveFamilyDaycareDaysUnder3Count:
          'Family daycare care days for children under 3 years old',
        effectiveFamilyDaycareDaysOver3Count:
          'Family day care days for 3 years and over',
        languageStatDay: '(situation on 30.11.)'
      },
      yearlyStatisticsColumns: {
        voucherTotalCount: 'Number of service vouchers',
        voucherAssistanceCount: 'Number of support children in service voucher units',
        voucher5YearOldCount: '5-year-olds in service voucher units',
        purchased5YearlOldCount: '5-year-olds in purchasing service units',
        municipal5YearOldCount: '5-year-olds in municipal units',
        familyCare5YearOldCount: '5-year-olds in family daycare',
        club5YearOldCount: '5-year-olds in the club',
        preschoolDaycareUnitCareCount:
          'Children of supplementary early childhood education in stable units',
        preschoolDaycareSchoolCareCount:
          'Children of supplementary early childhood education in schools',
        preschoolDaycareFamilyCareCount:
          'Children of supplementary early childhood education in family day care',
        preschoolDaycareUnitShiftCareCount:
          'Children in supplementary early childhood day care in stable units',
        preschoolDaycareSchoolShiftCareCount:
          'Children in supplementary early childhood care in schools',
        voucherGeneralAssistanceCount:
          'Number of children in general support (service voucher)',
        voucherSpecialAssistanceCount:
          'Number of children in special support (service voucher)',
        voucherEnhancedAssistanceCount:
          'Number of children in enhanced support (service voucher)',
        municipalGeneralAssistanceCount:
          'Number of children in general support (municipal)',
        municipalSpecialAssistanceCount:
          'Number of children receiving special support (municipal)',
        municipalEnhancedAssistanceCount:
          'Number of children in enhanced support (municipal)',
        statDay: '(situation on 15.12.)'
      },
      municipalVoucherColumns: {
        statDay: '(situation on 15.12.)',
        municipality: 'Location municipality',
        under3VoucherCount: 'Service vouchers less than 3 years old',
        over3VoucherCount: 'Service vouchers for 3 years and over'
      }
    },
    citizenDocumentResponseReport: {
      title: 'Municipal documents',
      description:
        'The report lists the latest answers to yes/no or multiple-choice questions from municipal documents by group',
      filters: {
        unit: 'Unit',
        group: 'Group',
        template: 'Document',
        showBackupChildren: 'Also show the reserved ones'
      },
      headers: {
        name: 'Name',
        answeredAt: 'Answered'
      },
      noSentDocument: 'No document sent',
      noAnswer: 'Not answered'
    }
  },
  unitEditor: {
    submitNew: 'Create a unit',
    title: {
      contact: 'Unit contact information',
      unitManager: 'Contact information of the director of the early childhood education unit',
      preschoolManager: 'Contact information for the director of preschool education',
      decisionCustomization:
        'The name of the unit with the decision and notification of acceptance of the position',
      mealOrderIntegration: 'Food order integration',
      mealtime: 'Unit meal times'
    },
    label: {
      name: 'Unit name',
      openingDate: 'Unit start date',
      closingDate: 'term',
      area: 'Area',
      careTypes: 'Modes of operation',
      dailyPreschoolTime: 'Teaching time',
      dailyPreparatoryTime: 'Teaching time',
      canApply: 'Show unit',
      providerType: 'Form of organization',
      operationDays: 'Operating days',
      shiftCareOperationDays: 'Operating days of shift care',
      operationDay: {
        0: 'SU',
        1: 'MA',
        2: 'TI',
        3: 'KE',
        4: 'TO',
        5: 'PE',
        6: 'LA',
        7: 'SU'
      },
      shiftCare: 'Evening and day care',
      capacity: 'The unit\'s calculated number of children',
      language: 'The language of the unit',
      withSchool: 'In connection with the school',
      ghostUnit: 'A ghost unit',
      integrations: 'Integrations',
      invoicedByMunicipality: 'Billing from eVaka',
      ophUnitOid: 'Location OID',
      ophOrganizerOid: 'Organizer OID',
      costCenter: 'Place of issue',
      dwCostCenter: 'DW Place of publication',
      financeDecisionHandler: 'Handler of financial decisions',
      additionalInfo: 'More information about the unit',
      phone: 'Unit phone number',
      email: 'Unit email address',
      url: 'Unit URL',
      visitingAddress: 'Visiting address',
      location: 'Map coordinates',
      mailingAddress: 'Postal address',
      unitManager: {
        name: 'Director\'s name',
        phone: 'Director\'s phone number',
        email: 'Director\'s email address'
      },
      preschoolManager: {
        name: 'Name of the director of preschool education',
        phone: 'The telephone number of the director of preschool education',
        email: 'E-mail address of the director of preschool education'
      },
      decisionCustomization: {
        daycareName: 'Unit name with early childhood education decision',
        preschoolName: 'Name of the unit with pre-school decision',
        handler: 'Recipient of the guardian\'s notification',
        handlerAddress: 'The address of the recipient of the notification'
      },
      businessId: 'Y ID',
      iban: 'Account number',
      providerId: 'Supplier number',
      partnerCode: 'Affiliate code',
      mealTime: {
        breakfast: 'Breakfast',
        lunch: 'Lunch',
        snack: 'Snack',
        supper: 'Dinner',
        eveningSnack: 'Supper'
      },
      nekkuMealReduction: 'Nekku discount percentage',
      nekkuNoWeekendMealOrders: 'No Nekku orders on weekends'
    },
    info: {
      varda: 'Used in Varda integration',
      koski: 'Used in Koski integration'
    },
    field: {
      applyPeriod: 'When the desired start date in the time frame',
      canApplyDaycare: 'In the search for early childhood education',
      canApplyPreschool: 'In the preschool search',
      canApplyClub: 'In club search',
      providesShiftCare: 'The unit offers evening and day care',
      shiftCareOpenOnHolidays: 'Shift care is also open on public holidays',
      capacity: 'person',
      withSchool: 'The unit is located next to the school',
      ghostUnit: 'The unit is a ghost unit',
      uploadToVarda: 'The unit\'s information is sent to Varda',
      uploadChildrenToVarda: 'The information about the children in the unit is sent to Varda',
      uploadToKoski: 'Sent to the Koski service',
      invoicedByMunicipality: 'Billing from eVaka',
      invoicingByEvaka: 'Unit invoicing takes place from eVaka',
      decisionCustomization: {
        handler: [
          'Service control',
          'Director of the early childhood education unit',
          'Ledare inom småbarnspedagogik',
          'Svenska bildningstjänster / Småbarnspedagogik'
        ]
      },
      nekkuNoWeekendMealOrders: 'Nekku orders are not made for weekends'
    },
    placeholder: {
      name: 'Give the unit a name',
      area: 'Select an area',
      financeDecisionHandler: 'Select an employee',
      daycareType: 'Choose a type',
      costCenter: '(mandatory information when invoicing eVaka)',
      dwCostCenter: 'For DW, information on the place of publication',
      additionalInfo:
        'You can write more information about the unit (not visible to the municipality)',
      phone: 'e.g. +358 40 555 5555',
      email: 'etunimi.sukunimi@espoo.fi',
      url: 'e.g. https://www.espoo.fi/fi/toimipisteet/15585',
      streetAddress: 'Street name e.g. Koivu-Mankkaan tie 22 B 24',
      postalCode: 'Postcode',
      postOffice: 'Post',
      location: 'e.g. 60.223038, 24.692637',
      manager: {
        name: 'First name Last name'
      },
      decisionCustomization: {
        name: 'e.g. Dawn Daycare'
      }
    },
    error: {
      name: 'The name is missing',
      area: 'The area is missing',
      careType: 'Mode of action is missing',
      dailyPreschoolTime: 'Preschool time is missing or incorrect',
      dailyPreparatoryTime:
        'The preparatory teaching time is missing or incorrect',
      daycareType: 'The type of early childhood education is missing',
      capacity: 'The capacity is invalid',
      costCenter: 'The place of publication is missing',
      reservedOphUnitOid: 'The unit\'s OPH OID is already in use in another unit',
      url: 'The URL must have an https:// or http:// prefix',
      visitingAddress: {
        streetAddress: 'The street address of the visiting address is missing',
        postalCode: 'The postal code of the visiting address is missing',
        postOffice: 'The postal office of the visiting address is missing'
      },
      location: 'The map coordinates are incorrect',
      unitManager: {
        name: 'Director\'s name is missing',
        phone: 'Manager\'s phone number is missing',
        email: 'The manager\'s email is missing'
      },
      cannotApplyToDifferentType: 'The search type and service format do not match',
      financeDecisionHandler: 'The financial decision handler is missing',
      ophUnitOid: 'Unit OID is missing',
      ophOrganizerOid: 'Organizer OID is missing',
      openingDateIsAfterClosingDate: 'The start date is after the end date',
      businessId: 'The Y ID is missing',
      iban: 'The account number is missing',
      providerId: 'The supplier number is missing',
      operationTimes: 'Incorrect entry in the unit\'s operating hours',
      shiftCareOperationTimes:
        'Incorrect entry in the operating hours of the unit\'s shift care',
      mealTimes: 'Incorrect entry in the unit\'s meal times',
      closingDateBeforeLastPlacementDate: (lastPlacementDate: LocalDate) =>
        `Yksikössä on sijoituksia ${lastPlacementDate.format()} asti. Kaikki sijoitukset ja varasijoitukset tulee päättää yksikön päättymispäivään mennessä, mukaan lukien myös mahdolliset tulevaisuuden sijoitukset.`
    },
    warning: {
      onlyMunicipalUnitsShouldBeSentToVarda:
        'Do not send information from non-municipal and municipal purchasing service units to Varda.',
      handlerAddressIsMandatory:
        'The address of the recipient of the notification is mandatory if municipal, purchase service or service voucher has been selected as the form of organization of the unit.'
    },
    closingDateModal: 'Set an end date'
  },
  fileUpload: {
    download: {
      modalHeader: 'File processing is in progress',
      modalMessage:
        'The file cannot be opened right now. Please try again later.',
      modalClose: 'Close'
    }
  },
  messages: {
    inboxTitle: 'Messages',
    emptyInbox: 'This folder is empty',
    replyToThread: 'Reply to the message',
    archiveThread: 'Archive thread',
    markUnread: 'Mark as unread',
    changeFolder: {
      button: 'Change folder',
      modalTitle: 'Select a folder',
      modalOk: 'Move to folder'
    },
    unitList: {
      title: 'Units'
    },
    sidePanel: {
      municipalMessages: 'Announcements from the municipality',
      serviceWorkerMessages: 'Service control messages',
      serviceWorkerFolders: 'Service control folders',
      financeMessages: 'Messages from the financial administration',
      financeFolders: 'Financial administration folders',
      ownMessages: 'Your messages',
      groupsMessages: 'Group messages',
      noAccountAccess:
        'Messages cannot be displayed because you are not allowed in the group. Ask your supervisor for permission.'
    },
    messageBoxes: {
      names: {
        received: 'Arrived',
        sent: 'Sent',
        drafts: 'Sketches',
        copies: 'Announcements from the director/municipality',
        archive: 'Archives',
        thread: 'Message thread'
      },
      receivers: 'Recipients',
      newMessage: 'New message'
    },
    messageList: {
      titles: {
        received: 'Incoming messages',
        sent: 'Sent messages',
        drafts: 'Sketches',
        copies: 'Announcements from the director/municipality',
        archive: 'Archives',
        thread: 'Message thread'
      }
    },
    types: {
      MESSAGE: 'Message',
      BULLETIN: 'Release'
    },
    recipientSelection: {
      title: 'Recipients',
      childName: 'Name',
      childDob: 'Date of birth',
      receivers: 'Recipients',
      confirmText: 'Send a message to selected people',
      starters: 'starting children'
    },
    noTitle: 'No title',
    notSent: 'Not sent',
    editDraft: 'Edit nature',
    undo: {
      info: 'Message sent',
      secondsLeft: (s: number) =>
        s === 1 ? '1 second time' : `${s} sekuntia aikaa`
    },
    sensitive: 'sensitive',
    customer: 'Customer',
    applicationTypes: {
      PRESCHOOL: 'Preschool application',
      DAYCARE: 'Early childhood education application',
      CLUB: 'Club application'
    },
    application: 'Application',
    showApplication: 'View the application',
    messageEditor: {
      message: 'Message',
      newMessage: 'New message',
      to: {
        label: 'Recipient',
        placeholder: 'Select a group',
        noOptions: 'No groups'
      },
      recipients: 'Recipients',
      recipientCount: 'Recipients',
      manyRecipientsWarning: {
        title: (count: number) => `Viestillä on ${count} vastaanottajaa.`,
        text: (count: number) =>
          `Tämä viesti on lähdössä ${count} vastaanottajalle. Oletko varma, että haluat lähettää viestin?`
      },
      type: {
        label: 'Message type',
        message: 'Message',
        bulletin: 'Bulletin (cannot answer)'
      },
      flags: {
        heading: 'Additional notes for the message',
        urgent: {
          info: 'Send a message as urgent only if you want the guardian to read it during the working day.',
          label: 'Urgent'
        },
        sensitive: {
          info: 'Opening a sensitive message requires strong identification from the municipality.',
          label: 'Sensitive',
          whyDisabled:
            'A sensitive message can only be sent from a personal user account to the guardians of an individual child.'
        }
      },
      sender: 'Sender',
      selectPlaceholder: 'Select...',
      filters: {
        showFilters: 'Show more options',
        hideFilters: 'Hide advanced options',
        yearOfBirth: 'Year of birth',
        placementType: 'Investment type',
        shiftCare: {
          heading: 'Shift care',
          label: 'Shift care',
          intermittent: 'Occasional day care'
        },
        familyDaycare: {
          heading: 'Family day care',
          label: 'Family day care'
        }
      },
      title: 'Title',
      setFolder: 'Move to folder',
      deleteDraft: 'Reject draft',
      send: 'Send',
      sending: 'Sending'
    }
  },
  pinCode: {
    title: 'eVaka mobile PIN code',
    title2: 'Set the PIN code',
    text1:
      'On this page you can set your own personal PIN code for eVaka mobile. The PIN code is used in eVaka mobile for the lock',
    text2: 'for viewing the information behind.',
    text3: 'Attention!',
    text4:
      'Please do not give your PIN code to anyone else. If necessary, you can change the PIN code at any time.',
    text5:
      'The PIN code must contain four (4) numbers. The most common number combinations (e.g. 1234) are not valid.',
    pinCode: 'PIN code',
    button: 'Save the PIN code',
    placeholder: '4 numbers',
    error: 'A PIN code that is too easy or a PIN code that contains letters',
    locked: 'The PIN code is locked, change it to a new one',
    lockedLong:
      'The PIN code has been entered incorrectly 5 times in eVaka mobile, and the code is locked. Please replace it with a new PIN code.',
    link: 'eVaka mobile PIN code',
    unsavedDataWarning: 'You have not saved a PIN code'
  },
  employees: {
    name: 'Name',
    email: 'E-mail',
    rights: 'Rights',
    lastLogin: 'Last logged in',
    employeeNumber: 'Social security number',
    temporary: 'Temporary substitute',
    findByName: 'Search by name',
    activate: 'Activate',
    activateConfirm: 'Do you want to restore the user to active?',
    deactivate: 'Deactivate',
    deactivateConfirm: 'Do you want to deactivate a user?',
    deleteConfirm: 'Do you want to delete a user?',
    hideDeactivated: 'Show only active users',
    editor: {
      globalRoles: 'System roles',
      unitRoles: {
        name: 'Unit roles',
        title: 'Permits',
        scheduledRolesTitle: 'There will be approvals',
        unit: 'Unit',
        role: 'Role in the unit',
        startDate: 'Licensing begins',
        endDate: 'The authorization ends',
        deleteConfirm: 'Do you want to remove the user\'s authorization?',
        deleteAll: 'Remove all permissions',
        deleteAllConfirm: 'Do you want to remove all permissions for the user?',
        addRoles: 'Add permissions',
        addRolesModalTitle: 'New approval',
        units: 'Units',
        warnings: {
          hasCurrent: 'The person already has permits in the following units',
          hasScheduled:
            'The person already has future permits in the following units',
          currentEnding: (date: LocalDate) =>
            `Päällekkäiset luvitukset korvataan ${date.format()} alkaen.`,
          currentRemoved: 'These authorizations will be deleted.',
          scheduledRemoved: 'These future authorizations will be deleted.'
        }
      },
      mobile: {
        title: 'Personal mobile devices',
        name: 'Device name',
        nameless: 'An unnamed device',
        deleteConfirm: 'Do you want to unpair the user\'s mobile device?'
      }
    },
    createNewSsnEmployee: 'Create a new cheap user',
    newSsnEmployeeModal: {
      title: 'Add a new cheap user',
      createButton: 'Create an ID',
      ssnConflict: 'Hetu is already in use'
    },
    hasSsn: 'Inexpensive user'
  },
  financeBasics: {
    fees: {
      title: 'Customer fees',
      add: 'Create new customer payments',
      thresholds: 'Income limits',
      validDuring: 'Customer fees for the period',
      familySize: 'Family size',
      minThreshold: 'Minimum gross income €/month',
      maxThreshold: 'Gross income limit of the highest payment €/month',
      maxFeeError: 'The maximum payment does not match',
      thresholdIncrease: 'Income limit increase amount when family size > 6',
      thresholdIncreaseInfo:
        'If the family size is larger than 6, the income limit that is the basis for determining the payment is increased by the amount of the increase for each of the following minor children in the family.',
      multiplier: 'Fee %',
      maxFee: 'Maximum payment',
      minFee: 'The smallest charge per child',
      siblingDiscounts: 'Sister flights',
      siblingDiscount2: 'Discount% 1st sibling',
      siblingDiscount2Plus: 'Discount% other siblings',
      temporaryFees: 'Fees for temporary early childhood education',
      temporaryFee: 'Base price',
      temporaryFeePartDay: 'Part-time',
      temporaryFeeSibling: 'Basic price, second child',
      temporaryFeeSiblingPartDay: 'Part-time, second child',
      errors: {
        'date-overlap':
          'The payment settings overlap with another valid setting. Update the validity period of other payment settings first.'
      },
      modals: {
        editRetroactive: {
          title: 'Are you sure you want to edit the information?',
          text: 'Are you sure you want to modify the payment information already in use? If you modify the information, a retroactive payment or value decision will be created for all customers affected by the change.',
          resolve: 'Edit',
          reject: 'Do not edit'
        },
        saveRetroactive: {
          title: 'Do you want to save your payment settings retroactively?',
          text: 'You are saving payment settings that will take effect retroactively. If you save the information, a new retroactive payment or value decision will be created for all customers affected by the change.',
          resolve: 'Save',
          reject: 'Cancel'
        }
      }
    },
    serviceNeeds: {
      title: 'Service needs',
      add: 'Add a new service voucher value',
      voucherValues: 'Values ​​of service vouchers',
      validity: 'Validity period',
      baseValue: (
        <>
          Perusarvo,
          <br />
          3v tai yli (€)
        </>
      ),
      coefficient: (
        <>
          Kerroin,
          <br />
          3v tai yli
        </>
      ),
      value: (
        <>
          Enimmäisarvo,
          <br />
          3v tai yli (€)
        </>
      ),
      baseValueUnder3y: (
        <>
          Perusarvo,
          <br />
          alle 3v
        </>
      ),
      coefficientUnder3y: (
        <>
          Kerroin,
          <br />
          alle 3v
        </>
      ),
      valueUnder3y: (
        <>
          Enimmäisarvo,
          <br />
          alle 3v (€)
        </>
      ),
      errors: {
        'date-overlap':
          'Validity cannot start before the start date of the second service voucher value',
        'end-date-overlap':
          'Validity cannot start before the day following the expiration date of the previous service voucher',
        'date-gap': 'There can be no gaps between validity periods',
        shouldNotHappen: 'Unexpected error'
      },
      modals: {
        deleteVoucherValue: {
          title: 'Are you sure you want to delete the service voucher value?'
        }
      }
    }
  },
  documentTemplates: {
    title: 'Document templates',
    documentTypes: {
      PEDAGOGICAL_REPORT: 'Pedagogical explanation',
      PEDAGOGICAL_ASSESSMENT: 'Pedagogical assessment',
      HOJKS: 'HOJKS',
      MIGRATED_VASU: 'Early childhood education plan (transferred)',
      MIGRATED_LEOPS: 'Preschool education plan (transferred)',
      MIGRATED_DAYCARE_ASSISTANCE_NEED_DECISION:
        'Decision on support in early childhood education (postponed)',
      MIGRATED_PRESCHOOL_ASSISTANCE_NEED_DECISION:
        'Decision on support in pre-school education (postponed)',
      VASU: 'Early childhood education plan',
      LEOPS: 'Preschool education plan',
      CITIZEN_BASIC: 'A document to be completed with the guardian',
      OTHER_DECISION: 'Decision document',
      OTHER: 'Other document of the child'
    },
    documentTypeInfos: {
      CITIZEN_BASIC:
        'This is a document that both the citizen and the staff can fill out. If desired, the staff can answer the questions first, after which the document can be sent to the municipality to fill in eVaka.',
      OTHER_DECISION:
        'With this, all decision bases are made, with the exception of decisions related to applications',
      OTHER: 'The child\'s pedagogical document or plan filled out by the employee'
    },
    languages: {
      FI: 'Finnish speaking',
      SV: 'Swedish speaking',
      EN: 'English speaking'
    },
    templatesPage: {
      add: 'Create a new one',
      name: 'Name',
      type: 'Type',
      language: 'Language',
      validity: 'In effect',
      documentCount: 'Documents',
      status: 'Status',
      published: 'Published',
      draft: 'Draft',
      export: 'Export to file',
      import: 'Import from file',
      filters: {
        validity: 'Validity',
        active: 'In use',
        draft: 'Draft',
        future: 'Coming to use',
        past: 'Finished',
        type: 'Document type',
        all: 'All',
        language: 'Language'
      }
    },
    templateModal: {
      title: 'New document template',
      name: 'Name',
      type: 'Document type',
      placementTypes: 'Used with placements',
      language: 'Document language',
      confidential: 'The document must be kept confidential',
      confidentialityDuration: 'Confidentiality period (years)',
      confidentialityBasis: 'Confidentiality basis (metadata and archiving)',
      legalBasis: 'Reason for confidentiality / legal reference (visible on the form)',
      validity: 'Valid on time',
      processDefinitionNumber: 'Task class',
      processDefinitionNumberInfo:
        'Task category number defined in the information management plan. Leave blank if the document is not archived.',
      archiveDurationMonths: 'Archiving period (months)',
      archiveExternally: 'To be moved to an external archive before deletion',
      endDecisionWhenUnitChanges: 'The decision is broken if the child changes the unit'
    },
    templateEditor: {
      confidential: 'To be kept secret',
      addSection: 'New section',
      titleNewSection: 'New section',
      titleEditSection: 'Edit section',
      sectionName: 'Title',
      infoText: 'Help text',
      addQuestion: 'New section',
      titleNewQuestion: 'New question',
      titleEditQuestion: 'Edit the question',
      moveUp: 'Move up',
      moveDown: 'Move down',
      readyToPublish: 'Ready to publish',
      forceUnpublish: {
        button: 'Unpublish',
        confirmationTitle: 'Are you sure you want to unpublish?',
        confirmationText:
          'All documents using this document template will be deleted.'
      }
    },
    questionTypes: {
      TEXT: 'Text field',
      CHECKBOX: 'Tick',
      CHECKBOX_GROUP: 'Multiple choice',
      RADIO_BUTTON_GROUP: 'Multiple choice (choose one)',
      STATIC_TEXT_DISPLAY: 'A text paragraph without a question',
      DATE: 'Date',
      GROUPED_TEXT_FIELDS: 'Named text fields'
    },
    ...components.documentTemplates
  },
  settings: {
    key: 'Setting',
    value: 'Value',
    options: {
      DECISION_MAKER_NAME: {
        title: 'The name of the decision maker',
        description: 'The future name for the early education and service voucher decision'
      },
      DECISION_MAKER_TITLE: {
        title: 'The title of the decision maker',
        description:
          'Future title for early childhood education and service voucher decision'
      }
    }
  },
  unitFeatures: {
    page: {
      title: 'Functions open to units',
      unit: 'Unit',
      selectAll: 'Select all',
      unselectAll: 'Delete all',
      providerType: 'Mode of operation of the unit',
      careType: 'Treatment of the unit',
      undo: 'Undo the previous change'
    },
    pilotFeatures: {
      MESSAGING: 'Communication',
      MOBILE: 'Mobile',
      RESERVATIONS: 'Municipal calendar',
      VASU_AND_PEDADOC: 'Pedagogical documents and pedagogical documentation',
      MOBILE_MESSAGING: 'Mobile communication',
      PLACEMENT_TERMINATION: 'Termination of position',
      REALTIME_STAFF_ATTENDANCE: 'Real-time presence of staff',
      PUSH_NOTIFICATIONS: 'Mobile notifications',
      SERVICE_APPLICATIONS: 'Requests for changes in service needs',
      STAFF_ATTENDANCE_INTEGRATION: 'Work shift planning integration',
      OTHER_DECISION: 'Other decisions',
      CITIZEN_BASIC_DOCUMENT: 'Documents to be filled out by guardians'
    }
  },
  roles: {
    adRoles: {
      ADMIN: 'Master user',
      DIRECTOR: 'Administration',
      MESSAGING: 'Communication',
      REPORT_VIEWER: 'Reportage',
      FINANCE_ADMIN: 'Economic',
      FINANCE_STAFF: 'Household employee (external)',
      SERVICE_WORKER: 'Service control',
      SPECIAL_EDUCATION_TEACHER: 'Special education teacher',
      EARLY_CHILDHOOD_EDUCATION_SECRETARY: 'Secretary of Early Childhood Education',
      STAFF: 'Staff',
      UNIT_SUPERVISOR: 'Manager'
    }
  },
  welcomePage: {
    text: 'You are logged in to the city of Espoo\'s eVaka service. Your user ID has not yet been granted rights that enable the use of the service. You can get the necessary access rights from your supervisor.'
  },
  validationErrors: {
    ...components.validationErrors,
    ...components.datePicker.validationErrors,
    dateRangeNotLinear:
      'The start date of the time interval must be before the end date.',
    timeRangeNotLinear: 'Check the order',
    guardianMustBeHeard: 'The guardian must be consulted',
    futureTime: 'Time in the future'
  },
  holidayPeriods: {
    confirmDelete: 'Are you sure you want to delete vacation time?',
    createTitle: 'Create a new vacation time',
    editTitle: 'Edit vacation time',
    period: 'Interval',
    reservationsOpenOn: 'The survey is opened',
    reservationDeadline: 'The last limit for bookings',
    clearingAlert:
      'The reservations already made by the citizens will be erased from the selected time slot',
    confirmLabel:
      'I understand that the reservations made will be deleted immediately and this can no longer be canceled.',
    validationErrors: {
      tooSoon: 'Vacation time can be created 4 weeks at the earliest',
      tooLong: 'The vacation period can be a maximum of 15 weeks',
      afterStart: 'Can\'t be after the start',
      afterReservationsOpen: 'Can\'t be after opening day'
    }
  },
  holidayQuestionnaires: {
    confirmDelete: 'Are you sure you want to delete the survey?',
    types: {
      FIXED_PERIOD: 'Solid season',
      OPEN_RANGES: 'Open season'
    },
    questionnaires: 'Absence surveys',
    absenceType: 'Type of absence',
    title: 'Title',
    description: 'Explanation of the survey for the municipality',
    descriptionLink: 'Additional information link',
    active: 'In effect',
    fixedPeriodOptionLabel: 'The question of season selection',
    fixedPeriodOptionLabelPlaceholder:
      'E.g. The children are away for 8 weeks during the term',
    fixedPeriodOptions: 'Options for seasons',
    fixedPeriodOptionsPlaceholder:
      '30.5.2022-24.8.2022, 6.6.2022-31.8.2022, separated by commas or line breaks',
    requiresStrongAuth: 'Strong identification',
    conditionContinuousPlacement:
      'You can answer the survey if the child has a continuous placement',
    period: 'Period of absence',
    absenceTypeThreshold: 'Minimum length of continuous absence',
    days: 'days'
  },
  terms: {
    term: 'Semester',
    finnishPreschool: 'Pre-school education in Finnish',
    extendedTermStart: 'The extended semester begins',
    applicationPeriodStart: 'The application for the semester begins',
    termBreaks: 'Teaching breaks',
    addTerm: 'Add a semester',
    confirmDelete: 'Are you sure you want to delete a semester?',
    extendedTermStartInfo:
      'The time when the early childhood education fee is determined according to the related early childhood education.',
    termBreaksInfo:
      'Add to this the times during the semester when teaching is not offered, e.g. Christmas holidays.',
    addTermBreak: 'Add a break period',
    validationErrors: {
      overlap:
        'There is already an overlapping semester for this period. Try posting the entry for a different time period.',
      extendedTermOverlap:
        'There is already an overlapping extended semester for this period. Try posting an entry for a different start date',
      extendedTermStartAfter:
        'The start date of the extended semester cannot be after the start date of the semester.',
      termBreaksOverlap: 'Overlapping teaching breaks are not allowed.'
    },
    modals: {
      editTerm: {
        title: 'Are you sure you want to edit the information?',
        text: 'Are you sure you want to modify the semester that has already started?',
        resolve: 'Edit',
        reject: 'Do not edit'
      },
      deleteTerm: {
        title: 'Are you sure you want to delete a semester?'
      }
    }
  },
  preferredFirstName: {
    popupLink: 'Nickname',
    title: 'Nickname',
    description:
      'You can define your nickname used in eVaka. The nickname must be one of your first names. If your name has changed and you need to update your new name in eVaka, contact the Espoo HelpDesk.',
    select: 'Choose a nickname',
    confirm: 'Confirm'
  },
  metadata: {
    title: 'Metadata to be archived',
    notFound: 'There is no archived metadata for the document',
    caseIdentifier: 'Subject ID',
    processName: 'The case process',
    organization: 'Organization',
    archiveDurationMonths: 'Archiving time',
    primaryDocument: 'Primary document',
    secondaryDocuments: 'Other documents',
    documentId: 'Document identifier',
    name: 'Document name',
    createdAt: 'Compilation date',
    createdBy: 'Author',
    monthsUnit: 'months',
    confidentiality: 'Publicity',
    confidential: 'To be kept secret',
    public: 'Public',
    notSet: 'Unset',
    confidentialityDuration: 'Secrecy time',
    confidentialityBasis: 'The basis of confidentiality',
    years: 'years',
    receivedBy: {
      label: 'Method of arrival',
      PAPER: 'Down',
      ELECTRONIC: 'Electronically'
    },
    sfiDelivery: {
      label: 'Suomi.fi deliveries',
      method: {
        ELECTRONIC: 'Electronically',
        PAPER_MAIL: 'By post',
        PENDING: 'Awaiting delivery'
      }
    },
    history: 'Process history',
    downloadPdf: 'Download the PDF',
    states: {
      INITIAL: 'Case initiation / entry',
      PREPARATION: 'Preparation of the matter',
      DECIDING: 'Decision',
      COMPLETED: 'Implementation / Termination / Closing'
    }
  },
  systemNotifications: {
    title: {
      CITIZENS: 'Notice visible to municipal residents',
      EMPLOYEES: 'Notice visible to staff'
    },
    noNotification: 'No notification at this time',
    setNotification: 'Set notification',
    text: 'Text',
    textFi: 'Text in Finnish',
    textSv: 'Text in Swedish',
    textEn: 'Text in English',
    validTo: 'Goes out of sight'
  },
  placementTool: {
    title: 'Placement optimization tool',
    description:
      'You can create applications for eVaka from the investment proposals produced with the optimization tool. Applications are created directly to await a decision.',
    preschoolTermNotification: 'Applications are created for the following preschool period:',
    preschoolTermWarning:
      'eVaka lacks a definition of the next preschool period. The pre-school period is needed for creating applications.',
    validation: (count: number, existing: number) =>
      `Olet tuomassa ${count} sijoitusta${existing > 0 ? ` (joista ${existing} löytyy jo järjestelmästä)` : ''}, jatka?`
  },
  outOfOffice: {
    menu: 'Director\'s absence period',
    title: 'Period of absence',
    description:
      'You can add information here, for example, about your vacation. When you are away, the guardians of the children will see a notification that you are not there.',
    header: 'Period of absence',
    noFutureOutOfOffice: 'No future absences',
    addOutOfOffice: 'Add an absence period',
    validationErrors: {
      endBeforeToday: 'Can\'t end in the past'
    }
  },
  components
}


export default en
