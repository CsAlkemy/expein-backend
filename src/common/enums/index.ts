export namespace ENUMS {
  export enum Role {
    SUPER_ADMIN = 'SuperAdmin',
    ADMIN = 'Admin',
    USER = 'User',
  }
  export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHERS = 'Others',
  }
  export enum StatusTypeEnum {
    ACTIVE = 1,
    INACTIVE = 0,
    REJECT = 2,
  }
  export enum BoolEnum {
    YES = 1,
    NO = 0,
  }
  export enum FileUploadFolder {
    USERS = 'users',
    TEMPLATE = 'templates',
    PROFILE_PICTURE = 'profilePicture',
    REMOVE_BG = 'removeBG',
    CATEGORY = 'category',
    SUB_CATEGORY = 'subCategory',
    SHARE_PICTURE = 'sharePicture',
    SLIDER = 'sliders',
  }
  export enum ConfirmationEnum {
    PENDING = 0,
    APPROVE = 1,
    REJECT = 2,
  }
  export enum CollectionEnum {
    USER = 'users',
    PROFILE = 'profiles',
    LOG = 'logs',
    CLIENT = 'clients',
    FILE_UPLOADS = 'fileUploads',
    CATEGORY = 'categories',
    EXPENSE = 'expense',
    SUB_CATEGORY = 'subCategories',
    SUB_CATEGORY_MAPPING = 'subCategoriesMapping',
    TEMPLATE = 'templates',
    USER_FAVOURITE_TEMPLATES = 'userFavouriteTemplates',
    AYRSHARE_USER = 'ayrshareUsers',
    AYRSHARE_LOG = 'ayrshareLogs',
    AYRSHARE_ADMIN_LOG = 'ayrshareAdminLogs',
    SUBSCRIPTION = 'subscriptions',
    SUBSCRIPTION_LOG = 'subscriptionLogs',
    WEBHOOKLOGS = 'webhookLogs',
    INVOICE = 'invoices',
    AYRSHARE_LOG_BY_SOCIAL_MEDIA = 'ayrshareLogsBySocialMedia',
    SIGN_IN_PLATFORM_LOG = 'signInPlatformLogs',
    PACKAGE = 'packages',
    USER_REGISTRATION_IP = 'userRegistrationIps',
  }
}
