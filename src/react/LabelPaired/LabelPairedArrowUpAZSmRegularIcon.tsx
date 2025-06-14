import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZSmRegularIcon = (
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
      <path d='m4.8 4.762 2.626 2.625a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0L4.938 6.129v10.308a.45.45 0 0 1-.437.438.43.43 0 0 1-.437-.437V6.127L2.176 8.017a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l2.626-2.624a.463.463 0 0 1 .629 0m4.95 6.863h3.5c.164 0 .3.11.383.273a.37.37 0 0 1-.055.438L10.652 16h2.598a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-3.5a.42.42 0 0 1-.41-.246c-.082-.137-.055-.328.055-.465L12.32 12.5H9.75a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438m1.75-7c.164 0 .3.11.383.246l1.75 3.5v.027l.437.848a.45.45 0 0 1-.191.602.45.45 0 0 1-.602-.192l-.3-.656h-2.98l-.302.656a.45.45 0 0 1-.601.192c-.192-.11-.301-.383-.192-.602l.438-.848v-.027l1.75-3.5a.47.47 0 0 1 .41-.246m-1.066 3.5h2.105L11.5 6.047z' />
    </g>
    <defs>
      <clipPath id='1b7006f4de12466e0cd766e4a4e14bb0__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZSmRegularIcon);
export default ForwardRef;
