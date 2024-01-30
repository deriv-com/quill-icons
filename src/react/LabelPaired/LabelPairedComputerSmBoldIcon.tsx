import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 5.938H2q-.41.027-.437.437V12.5q.027.41.437.438h8.75q.41-.028.438-.438V6.375q-.028-.41-.438-.437M2 14.25q-.738-.027-1.23-.52-.493-.492-.52-1.23V6.375q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23V12.5q-.027.738-.52 1.23-.492.493-1.23.52H8.371l.438 1.313h1.285q.601.054.656.656-.055.601-.656.656H2.656q-.601-.055-.656-.656.054-.602.656-.657h1.285l.438-1.312zm3.309 1.313H7.44l-.437-1.313H5.746zm9.379-9.625v.875h1.75v-.875zm0 2.187V9h1.75v-.875zm1.75 2.188h-1.75v5.25h1.75zm-3.063-4.376q.027-.546.383-.93.383-.354.93-.382h1.75q.546.027.93.383.355.383.382.93v9.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-1.75a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93zm2.188 7.657q-.602-.055-.657-.656.055-.602.656-.657.602.055.657.656-.056.602-.657.657' />
    </g>
    <defs>
      <clipPath id='2e78b182acf5f9412d2b9597207de20c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerSmBoldIcon);
export default ForwardRef;
