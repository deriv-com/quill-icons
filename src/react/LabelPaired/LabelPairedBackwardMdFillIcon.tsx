import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardMdFillIcon = (
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
      <path d='M14.344 17.781 9 13.313v-2.594l5.344-4.469c.312-.25.719-.312 1.062-.156.344.187.594.531.594.906v10c0 .406-.25.75-.594.906-.344.188-.75.125-1.062-.125M8 15v2c0 .406-.25.75-.594.906-.343.188-.75.125-1.062-.125l-6-5A1.01 1.01 0 0 1 0 12c0-.281.125-.562.344-.75l6-5c.312-.25.718-.312 1.062-.156C7.75 6.28 8 6.625 8 7v8' />
    </g>
    <defs>
      <clipPath id='ed761bd095cbc3312277b669372db0f9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdFillIcon);
export default ForwardRef;
