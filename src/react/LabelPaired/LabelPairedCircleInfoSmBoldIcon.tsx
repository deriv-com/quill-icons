import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleInfoSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m-1.094-4.812h.657v-1.75h-.657a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656H7.22c.355 0 .656.3.656.656v2.406h.219c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H5.906a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656M7 9a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875' />
    </g>
    <defs>
      <clipPath id='beaf73e2d18c3dc015c5d131283bcba9__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleInfoSmBoldIcon);
export default ForwardRef;
