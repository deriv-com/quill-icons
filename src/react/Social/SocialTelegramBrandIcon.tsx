import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialTelegramBrandIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='url(#a)'
      d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M7.243 15.83c4.664-2.032 7.774-3.371 9.33-4.019 4.444-1.848 5.367-2.169 5.969-2.18.132-.002.428.031.62.187a.674.674 0 0 1 .228.433c.021.125.047.408.026.63-.24 2.53-1.282 8.67-1.812 11.503-.225 1.199-.666 1.601-1.094 1.64-.929.086-1.634-.614-2.534-1.204-1.409-.923-2.204-1.497-3.571-2.398-1.58-1.041-.556-1.613.345-2.548.235-.245 4.33-3.969 4.408-4.306.01-.043.02-.2-.074-.283-.094-.084-.232-.055-.331-.033-.142.033-2.391 1.52-6.75 4.461-.638.439-1.216.652-1.735.641-.57-.012-1.67-.323-2.487-.588-1.002-.326-1.798-.498-1.729-1.051.037-.288.433-.583 1.19-.884'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient id='a' x1={16} x2={16} y1={0} y2={31.763} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#2AABEE' />
        <stop offset={1} stopColor='#229ED9' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialTelegramBrandIcon);
export default ForwardRef;
