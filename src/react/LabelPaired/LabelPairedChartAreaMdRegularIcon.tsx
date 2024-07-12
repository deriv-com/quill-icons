import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.5v11c0 .844.656 1.5 1.5 1.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13A2.47 2.47 0 0 1 0 16.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5m8.281 5.219L7 8.438 4.125 11.28a.47.47 0 0 0-.125.344V15h10v-2.937c0-.126-.062-.22-.125-.313l-1.937-2.281-1.25 1.25A.97.97 0 0 1 10 11a1 1 0 0 1-.719-.281m0-1.406L10 10l.688-.687.53-.532a1.01 1.01 0 0 1 1.47.063l1.937 2.25c.219.281.375.625.375.969V15c0 .563-.469 1-1 1H4c-.562 0-1-.437-1-1v-3.375c0-.375.156-.781.438-1.062L6.28 7.719a1.02 1.02 0 0 1 1.407 0z' />
    </g>
    <defs>
      <clipPath id='f5581b161d43296f3304d7ace727f2bd__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaMdRegularIcon);
export default ForwardRef;
