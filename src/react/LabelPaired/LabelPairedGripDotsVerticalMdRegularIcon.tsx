import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5M0 7c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0C2.688 6 3 6.469 3 7c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 0 7m2 5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5m-2 0c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0C2.688 11 3 11.469 3 12c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 0 12m1.5 5.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5m0-2c.531 0 1 .313 1.281.75.281.469.281 1.063 0 1.5-.281.469-.75.75-1.281.75a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75M7 7c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5M5 7c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0C7.688 6 8 6.469 8 7c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 5 7m1.5 5.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5m0-2c.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5-.281.469-.75.75-1.281.75a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75M7 17c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5m-2 0c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0C7.688 16 8 16.469 8 17c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 5 17' />
    </g>
    <defs>
      <clipPath id='ff29f30568be8eb1bde255d435c8c1c1__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalMdRegularIcon);
export default ForwardRef;
