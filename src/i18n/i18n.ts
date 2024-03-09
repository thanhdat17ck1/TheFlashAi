import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const locales = {
    en: 'English',
    vi: 'Tiếng Việt'
}

const resources = {
    en: {
        translation: {          
            'TRIAL': "TRIAL",
            'BASIC': "BASIC",
            'ADVANCE':'ADVANCE',  
            'Free': 'Free',
            "WEEK": 'WEEK', 
            "MONTH": 'MONTH',        
            "One license only": 'One license only',
            "Recommended balance only": 'Recommended balance only',
            "PAIR": 'PAIR',
            'Momentum tech':'Momentum tech',
            'Profit':'Profit',
            'Risk':'Risk',
            'Fee share':'Fee share',
            'sever fee':'sever fee',    
            'Buy Now':'Buy Now',    
            'Plan Features': 'Plan Features',
            'Register':'Register',
            'Enter email':'Enter email',
            'Enter phone':'Enter phone',
            'Enter fullname':'Enter fullname',
            'Submit':'Submit',
            'Login':'Login',
            'SignUp':'Sign Up',
            'en':'English',
            'vi':'Vietnamese'
        }
    },
    vi: {
        translation: {
            'TRIAL': "TÀI KHOẢN THỬ NGHIỆM",
            'BASIC':'TÀI KHOẢN CƠ BẢN', 
            'ADVANCE':'NÂNG CAO',
            'Free': 'Miễn phí  - BẢO HIỂM VỐN HOÀN TOÀN',
            'WEEK':'Tuần',  
            "MONTH": 'Tháng',     
            "One license only": 'Chỉ một giấy phép',
            "Recommended balance only": 'Chỉ với',
            "PAIR": 'Các loại tiền tệ',
            "Momentum tech": 'Công nghê giao dịch đông lượng',
            "Profit": 'Lợi nhuận',          
            'Risk':'Rũi ro',
            'Fee share': 'Phí share',
            '(sever fee)':'(chi phí máy chủ)',
            'Buy Now':'Mua Ngay',  
            'Plan Features': 'Tính năng kế hoạch',
            'Register':'Đăng ký',
            'Enter email':'Nhập email',
            'Enter phone':'Nhập số điện thoại',
            'Enter fullname':'Nhập họ tên',
            'Submit':'Gửi',
            'Login':'Đăng nhập',
            'SignUp':'Đăng ký',
            'en':'Tiếng Anh',
            'vi':'Tiếng Việt'
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
        escapeValue: false
    }
});