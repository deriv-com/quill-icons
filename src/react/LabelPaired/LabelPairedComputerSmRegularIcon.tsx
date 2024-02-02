import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerSmRegularIcon = (
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
      <path d='M10.75 5.5H2a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V12.5q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V6.375a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246M2 14.25q-.738-.027-1.23-.52-.493-.492-.52-1.23V6.375q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23V12.5q-.027.738-.52 1.23-.492.493-1.23.52H8.07L8.672 16h1.64q.411.027.438.438-.027.41-.437.437H2.436q-.41-.027-.437-.437.027-.411.438-.438h1.667l.575-1.75zM5.008 16h2.734l-.601-1.75H5.609zm9.68-10.5q-.411.027-.438.438V7.25h2.625V5.938q-.027-.411-.437-.438zm-.438 2.625V9h2.625v-.875zm0 7.438q.027.41.438.437h1.75q.41-.027.437-.437V9.875H14.25zm-.875-9.625q.027-.547.383-.93.383-.356.93-.383h1.75q.546.027.93.383.355.383.382.93v9.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-1.75a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93zm2.188 7.656q-.602-.055-.657-.656.055-.602.656-.657.602.055.657.656-.056.602-.657.657' />
    </g>
    <defs>
      <clipPath id='ed92adebb4c5ddd7__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerSmRegularIcon);
export default ForwardRef;
