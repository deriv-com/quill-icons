import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightXlFillIcon = (
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
      <path d='M14.531 16.969c.61.562.61 1.547 0 2.11l-9 9c-.562.608-1.547.608-2.11 0a1.445 1.445 0 0 1 0-2.11L11.345 18l-7.922-7.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0z' />
    </g>
    <defs>
      <clipPath id='1982d62f8a4e512a506dc203f1bbf224__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightXlFillIcon);
export default ForwardRef;
