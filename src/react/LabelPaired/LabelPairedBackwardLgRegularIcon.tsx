import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.445 15.5 10 21.71V9.329zM10.078 8c.625 0 1.172.547 1.172 1.172v4.062l6.875-5A1.1 1.1 0 0 1 18.828 8C19.453 8 20 8.547 20 9.172v12.656c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195l-6.875-5v4.023c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195L.352 16.28A.98.98 0 0 1 0 15.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 10.078 8m1.172 8.281 7.5 5.43V9.328l-7.5 5.43z' />
    </g>
    <defs>
      <clipPath id='842f63f6d2d66354be796f5d4784cbf1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgRegularIcon);
export default ForwardRef;
