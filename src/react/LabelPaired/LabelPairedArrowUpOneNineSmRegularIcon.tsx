import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineSmRegularIcon = (
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
      <path d='M12.375 5.063V9h.875q.41.027.438.438-.028.41-.438.437h-2.625q-.41-.027-.437-.437.027-.411.437-.438h.875V5.664l-.738.246q-.383.082-.547-.273-.082-.383.273-.547l1.313-.438q.219-.081.383.055.19.137.191.356m-7.574-.301 2.625 2.625q.273.3 0 .601-.3.274-.602 0l-1.886-1.86v10.31q-.029.41-.438.437-.41-.027-.437-.437V6.127l-1.887 1.86q-.3.274-.602 0-.273-.3 0-.601L4.2 4.762q.3-.274.602 0m7.027 9.707q.793-.027 1.23-.711a1.42 1.42 0 0 0 0-1.422q-.437-.684-1.23-.711-.793.027-1.23.71a1.42 1.42 0 0 0 0 1.423q.437.684 1.23.71m-2.297-1.422q.027-.984.684-1.613.63-.657 1.613-.684.984.027 1.613.684.657.629.684 1.613v.11q0 .901-.574 1.585l-1.723 1.996q-.273.274-.601.028-.302-.274-.055-.602l.683-.82h-.027q-.984-.027-1.613-.684-.657-.63-.684-1.613' />
    </g>
    <defs>
      <clipPath id='15383bc5fb2d8a5f__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineSmRegularIcon);
export default ForwardRef;
