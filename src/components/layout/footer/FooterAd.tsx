// src/components/layout/footer/FooterAd.tsx
import React, { useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { SiGoogleplay } from "react-icons/si";
import iphoneImage from '../../../assets/iphone-12.png';

interface FooterAdProps {
  className?: string;
}

const FooterAd: React.FC<FooterAdProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    window.location.href = '/special-offer';
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`w-full px-4 ${className}`}>
      <div className="max-w-[1240px] mx-auto">
        <div 
          className="
            w-full 
            bg-gradient-to-r from-[#6292CF] to-[#4A7DC8]
            rounded-2xl
            px-6 sm:px-8 md:px-12 lg:px-[60px]
            py-8 md:py-10
            relative
            overflow-hidden
            shadow-2xl
            border border-[#6292CF]
          "
          style={{
            paddingTop: '40px',
            paddingBottom: '40px',
            paddingLeft: '60px',
            paddingRight: '60px',
          }}
        >
          {/* زر الإغلاق */}
          <button
            onClick={handleClose}
            className="
              absolute top-4 right-4
              w-8 h-8
              rounded-full
              bg-white/20
              flex items-center justify-center
              text-white
              hover:bg-white/30
              transition-colors
              z-20
            "
            aria-label="إغلاق الإعلان"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          {/* تأثيرات خلفية */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full"></div>
          </div>

          {/* المحتوى */}
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-[60px]">
            
            {/* الجزء الأيسر: الأيقونة + المحتوى */}
            <div className="flex-1 flex flex-col md:flex-row items-start gap-8 md:gap-[60px]">
              {/* العنوان والوصف */}
              <div className="flex flex-col gap-6">
                {/* العنوان بالاستايل المطلوب */}
                <div 
                  className="text-white"
                  style={{
                    width: '540px',
                    height: '45px',
                    opacity: 1,
                    fontFamily: 'Georgia, serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '40px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                >
                  <h1 className="m-0 p-0">
Your Health, One Tap Away
                  </h1>
                </div>
                
                {/* الوصف بالاستايل المطلوب */}
                <div 
                  className="text-white"
                  style={{
                    width: '540px',
                    height: '60px',
                    opacity: 1,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <p className="m-0">
Book appointments, chat with doctors, and manage your health anytime—right from your phone. Download the app now and stay connected wherever you are.
                  </p>
                </div>

                {/* إعلانات متاجر التطبيقات */}
                <div 
                  className="mt-4 flex gap-10"
                  style={{
                    width: '410px',
                    height: '55px',
                    opacity: 1,
                    gap: '40px',
                  }}
                >
                  {/* Google Play */}
                  <div 
                    className="flex items-center border border-white/20"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      width: '187px',
                      height: '55px',
                      gap: '8px',
                      paddingTop: '8px',
                      paddingRight: '16px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      borderRadius: '8px',
                      background: 'var(--Background-Secondary-Defult, #05162C)',
                    }}
                  >
                    {/* أيقونة Google Play */}
                    <div className="flex-shrink-0">
                    <SiGoogleplay
                    color='white'
      style={{
        backgroundColor:'black',
        width: '24px',
        height: '27px',
        opacity: 1,
      }}/>
                    </div>
                    
                    {/* نص Google Play */}
                    <div className="flex-1">
                      <h3 
                        className="text-white font-bold text-sm mb-0.5"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        Google Play
                      </h3>
                      <p 
                        className="text-white/80 text-xs"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        Got IT ON

                      </p>
                    </div>
                  </div>

                  {/* Apple App Store */}
                  <div 
                    className="flex items-center border border-white/20"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      width: '187px',
                      height: '55px',
                      gap: '8px',
                      paddingTop: '8px',
                      paddingRight: '16px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      borderRadius: '8px',
                      background: 'var(--Background-Secondary-Defult, #05162C)',
                    }}
                  >
                    {/* أيقونة Apple App Store - تم تغييرها إلى DiApple */}
                    <div className="flex-shrink-0">
                      <DiApple 
                        color="white" 
                        style={{
                          backgroundColor: 'black',
                          borderRadius: '2px',
                          padding: '2px',
                          width:'32',
                          height:'32'
                        }}
                      />
                    </div>
                    
                    {/* نص Apple App Store */}
                    <div className="flex-1">
                      <h3 
                        className="text-white font-bold text-sm mb-0.5"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        App Store
                      </h3>
                      <p 
                        className="text-white/80 text-xs"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        Download on the
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* الجزء الأيمن: الصورة */}
            <div className="flex-shrink-0 mt-6 lg:mt-0">
              <div 
                className="relative"
                style={{
                  width: '500px',
                  height: '375px',
                  opacity: 1,
                }}
              >
                {/* صورة الجوال مع تطبيق الوايت ليبل */}
                <img
                  src={iphoneImage}
                  alt="تطبيق الوايت ليبل للصحة"
                  className="w-full h-full object-contain"
                />
                
                {/* تأثيرات على الصورة */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAd;