import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.5 21.422 4.172-4.172H3.328zm1.078 2.156A1.56 1.56 0 0 1 7.5 24q-.61 0-1.078-.422l-6-6q-.657-.75-.328-1.64Q.516 15.047 1.5 15h12q.984.047 1.406.938.329.89-.328 1.64z' />
    </g>
    <defs>
      <clipPath id='f840ae43ceffa80ff0d966e6f759c371__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownXlBoldIcon);
export default ForwardRef;
