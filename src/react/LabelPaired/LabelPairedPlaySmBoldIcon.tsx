import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaySmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.563 15.563 7.875-4.813-7.876-4.812zM.906 4.816c.41-.246.93-.246 1.34 0l7.875 4.813c.383.246.629.684.629 1.121 0 .465-.246.902-.629 1.121l-7.875 4.813a1.25 1.25 0 0 1-1.34.027c-.41-.219-.656-.656-.656-1.148V5.938c0-.465.246-.903.656-1.122' />
    </g>
    <defs>
      <clipPath id='256b7a284909b20f513e643c8a56ae07__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmBoldIcon);
export default ForwardRef;
