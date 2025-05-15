import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashSmFillIcon = (
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
      <path d='M4.066 4.242a.84.84 0 0 1 .766-.492h3.309c.328 0 .629.191.765.492l.219.383h2.625a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H1.25A.864.864 0 0 1 .375 5.5c0-.465.383-.875.875-.875h2.625zM11.75 7.25l-.602 9.27c-.027.71-.601 1.23-1.312 1.23h-6.7c-.71 0-1.284-.52-1.312-1.23L1.25 7.25z' />
    </g>
    <defs>
      <clipPath id='e0352ee4742eec6bcaca22d9b663a796__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashSmFillIcon);
export default ForwardRef;
