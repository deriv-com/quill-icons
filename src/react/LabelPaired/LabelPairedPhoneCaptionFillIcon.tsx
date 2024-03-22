import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m3.844 4.086.937 2.25c.164.375.07.82-.258 1.078l-1.148.961a7.87 7.87 0 0 0 3.75 3.75l.96-1.148a.904.904 0 0 1 1.08-.258l2.25.937c.444.164.655.656.538 1.102l-.562 2.062a.93.93 0 0 1-.891.68C4.688 15.5 0 10.813 0 5c0-.422.281-.773.68-.89l2.062-.563c.446-.117.938.094 1.102.539' />
    </g>
    <defs>
      <clipPath id='fa52af2a11c6252af2e46a09ac2e635e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneCaptionFillIcon);
export default ForwardRef;
