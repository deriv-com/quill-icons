import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUbuntuCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.242 5.258c0 .656-.351 1.219-.89 1.547a1.85 1.85 0 0 1-1.782 0c-.539-.328-.89-.89-.89-1.547 0-.633.351-1.219.89-1.524a1.74 1.74 0 0 1 1.782 0c.539.305.89.891.89 1.524M3.86 9.148c0 .633-.351 1.22-.89 1.547a1.85 1.85 0 0 1-1.781 0A1.81 1.81 0 0 1 .32 9.148c0-.632.328-1.218.867-1.523a1.74 1.74 0 0 1 1.782 0c.539.305.89.89.89 1.523M1.586 11.61h-.024c.54.118 1.102.047 1.594-.187a4.3 4.3 0 0 0 1.196 1.476 4.7 4.7 0 0 0 1.734.797c.14.024.305.047.445.07.024.563.211 1.102.563 1.524a5.76 5.76 0 0 1-3.328-.96c-.985-.68-1.758-1.618-2.18-2.72m9.258 2.11c0 .633-.352 1.219-.89 1.547a1.85 1.85 0 0 1-1.782 0 1.83 1.83 0 0 1-.89-1.547c0-.633.35-1.219.89-1.524a1.74 1.74 0 0 1 1.781 0c.54.305.89.89.89 1.524m-.188-1.969h-.023a4.16 4.16 0 0 0 .656-2.156c.024-.75-.14-1.5-.492-2.18.445-.281.82-.703 1.008-1.195a5.8 5.8 0 0 1 1.008 3.492 5.96 5.96 0 0 1-1.29 3.398 2.63 2.63 0 0 0-.867-1.359M2.617 6.688c-.187-.047-.351-.047-.539-.047h-.187a5.87 5.87 0 0 1 2.367-2.297 5.74 5.74 0 0 1 3.234-.68 2.3 2.3 0 0 0-.515 1.078 2.6 2.6 0 0 0-.047.399c-.703.023-1.383.187-1.97.515a4.26 4.26 0 0 0-1.522 1.36 2.7 2.7 0 0 0-.82-.328' />
    </g>
    <defs>
      <clipPath id='c0cf3cbc46e3e4e216a427112cf2aa44__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuCaptionIcon);
export default ForwardRef;
