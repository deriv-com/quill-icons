import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialTelegramBrandIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='url(#9487361d2ef5784e3c494bf566a8dd9d__a)'
      d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M7.243 15.83q6.996-3.047 9.33-4.019c4.444-1.848 5.367-2.169 5.969-2.18.132-.002.428.031.62.187a.67.67 0 0 1 .228.433c.021.125.047.408.026.63-.24 2.53-1.282 8.67-1.812 11.503-.225 1.199-.666 1.601-1.094 1.64-.929.086-1.634-.614-2.534-1.204-1.409-.923-2.204-1.497-3.571-2.398-1.58-1.041-.556-1.613.345-2.548.235-.245 4.33-3.969 4.408-4.306.01-.043.02-.2-.074-.283-.094-.084-.232-.055-.331-.033q-.212.05-6.75 4.461-.957.658-1.735.641c-.57-.012-1.67-.323-2.487-.588-1.002-.326-1.798-.498-1.729-1.051q.055-.432 1.19-.884'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='9487361d2ef5784e3c494bf566a8dd9d__a'
        x1={16}
        x2={16}
        y1={0}
        y2={31.763}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2AABEE' />
        <stop offset={1} stopColor='#229ED9' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialTelegramBrandIcon);
export default ForwardRef;
