import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 10.75A4.37 4.37 0 0 1 4.5 6.375h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H4.5a2.626 2.626 0 0 0 0 5.25h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H4.5A4.353 4.353 0 0 1 .125 10.75m15.75 0a4.37 4.37 0 0 1-4.375 4.375H9.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h1.75a2.626 2.626 0 0 0 0-5.25H9.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h1.75a4.39 4.39 0 0 1 4.375 4.375m-10.5-.875h5.25a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-5.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='9c81c5f131d7e8336adc00b0e5ef61b5__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleSmFillIcon);
export default ForwardRef;
