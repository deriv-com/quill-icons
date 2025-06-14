import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckMdRegularIcon = (
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
      <path d='M5.938 6.25a.51.51 0 0 1-.594.25 2.29 2.29 0 0 0-2.313.563 2.29 2.29 0 0 0-.562 2.312.51.51 0 0 1-.25.594C1.469 10.344 1 11.125 1 12c0 .906.469 1.656 1.219 2.063a.51.51 0 0 1 .25.593 2.29 2.29 0 0 0 .562 2.313 2.29 2.29 0 0 0 2.313.562c.25-.062.5.032.593.25A2.29 2.29 0 0 0 8 19c.875 0 1.656-.469 2.031-1.219a.52.52 0 0 1 .594-.25c.781.25 1.688.063 2.313-.562a2.29 2.29 0 0 0 .562-2.313c-.062-.25.031-.5.25-.594C14.5 13.657 15 12.907 15 12c0-.875-.5-1.656-1.25-2.031a.52.52 0 0 1-.25-.594 2.29 2.29 0 0 0-.562-2.312 2.29 2.29 0 0 0-2.313-.563.51.51 0 0 1-.594-.25A2.27 2.27 0 0 0 8 5c-.906 0-1.656.5-2.062 1.25M8 4c1.125 0 2.125.594 2.719 1.438a3.37 3.37 0 0 1 2.937.906 3.37 3.37 0 0 1 .906 2.937C15.407 9.875 16 10.875 16 12c0 1.156-.594 2.125-1.437 2.75a3.28 3.28 0 0 1-.907 2.906 3.3 3.3 0 0 1-2.937.938A3.33 3.33 0 0 1 8 20c-1.156 0-2.125-.562-2.75-1.406a3.22 3.22 0 0 1-2.906-.938 3.21 3.21 0 0 1-.938-2.906C.563 14.125 0 13.156 0 12c0-1.125.563-2.125 1.406-2.719a3.3 3.3 0 0 1 .938-2.937 3.28 3.28 0 0 1 2.906-.907C5.875 4.595 6.844 4 8 4m3.344 6.375-4 4a.53.53 0 0 1-.719 0l-2-2a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L7 13.312l3.625-3.656a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719' />
    </g>
    <defs>
      <clipPath id='b104dfd6737014b81893679fadd6ffc2__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckMdRegularIcon);
export default ForwardRef;
