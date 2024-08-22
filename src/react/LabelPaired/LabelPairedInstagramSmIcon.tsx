import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 7.605a3.163 3.163 0 0 1 3.145 3.145A3.145 3.145 0 0 1 6.5 13.895a3.13 3.13 0 0 1-3.145-3.145A3.145 3.145 0 0 1 6.5 7.605m0 5.196c1.121 0 2.023-.903 2.023-2.051A2.02 2.02 0 0 0 6.5 8.727c-1.148 0-2.05.902-2.05 2.023 0 1.148.929 2.05 2.05 2.05m3.992-5.305a.735.735 0 0 0-.738-.738.735.735 0 0 0-.738.738c0 .41.328.738.738.738s.738-.328.738-.738m2.078.738c.055 1.012.055 4.047 0 5.059-.054.984-.273 1.832-.984 2.57-.711.711-1.586.93-2.57.985-1.012.054-4.047.054-5.059 0-.984-.055-1.832-.274-2.57-.985-.711-.738-.93-1.586-.985-2.57-.054-1.012-.054-4.047 0-5.059.055-.984.274-1.859.985-2.57.738-.71 1.586-.93 2.57-.984 1.012-.055 4.047-.055 5.059 0 .984.054 1.859.273 2.57.984s.93 1.586.984 2.57m-1.312 6.125c.328-.793.246-2.707.246-3.609 0-.875.082-2.79-.246-3.61-.219-.519-.63-.956-1.149-1.148-.82-.328-2.734-.246-3.609-.246-.902 0-2.816-.082-3.61.246a2.1 2.1 0 0 0-1.175 1.149c-.328.82-.246 2.734-.246 3.609 0 .902-.082 2.816.246 3.61.219.546.629.956 1.176 1.175.793.328 2.707.246 3.609.246.875 0 2.79.082 3.61-.246.519-.219.956-.629 1.148-1.176' />
    </g>
    <defs>
      <clipPath id='7e77fb622b154f8395ed958b9603949c__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramSmIcon);
export default ForwardRef;
