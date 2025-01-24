import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.797 17.203c.422.469.422 1.172 0 1.594l-9 9c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l8.203-8.203-8.203-8.25a1.027 1.027 0 0 1 0-1.547 1.027 1.027 0 0 1 1.547 0zm-18-9 9 9c.422.469.422 1.172 0 1.594l-9 9c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l8.203-8.203-8.203-8.25a1.027 1.027 0 0 1 0-1.547 1.027 1.027 0 0 1 1.547 0z' />
    </g>
    <defs>
      <clipPath id='415d131552ad676622482beebf402cc3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightXlBoldIcon);
export default ForwardRef;
