import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={30}
    viewBox='0 0 21 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m2.414 6.594 17.266 7.5c1.25.547 1.25 2.304 0 2.851l-17.266 7.5c-1.328.586-2.695-.898-1.992-2.187l2.734-5.04c.156-.312.469-.546.86-.585l6.875-.86c.117 0 .234-.117.234-.273a.25.25 0 0 0-.234-.234l-6.875-.86c-.391-.078-.703-.273-.86-.586L.422 8.781c-.703-1.289.664-2.773 1.992-2.187' />
    </g>
    <defs>
      <clipPath id='c423669d076a1235eb4e17affea66d88__a'>
        <path d='M0 0h21v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopLgFillIcon);
export default ForwardRef;
