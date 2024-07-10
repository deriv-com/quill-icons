import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZSmRegularIcon = (
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
      <path d='M7.426 14.14 4.8 16.767a.463.463 0 0 1-.63 0L1.548 14.14a.463.463 0 0 1 0-.63.463.463 0 0 1 .629 0l1.886 1.887V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .438.438v10.335l1.859-1.886a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629m4.457-9.269 1.75 3.5v.027l.437.848a.45.45 0 0 1-.191.602c-.219.109-.492 0-.602-.192l-.3-.656h-2.98l-.302.656a.45.45 0 0 1-.601.192.45.45 0 0 1-.192-.602l.438-.848v-.027l1.75-3.5a.47.47 0 0 1 .41-.246c.164 0 .3.11.383.246M11.5 6.047l-1.066 2.078h2.105zm-1.75 5.578h3.5c.164 0 .3.11.383.273a.37.37 0 0 1-.055.438L10.652 16h2.598a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-3.5a.42.42 0 0 1-.41-.246.48.48 0 0 1 .055-.465L12.32 12.5H9.75a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438' />
    </g>
    <defs>
      <clipPath id='d0724d4578e53b0526674eeb147633e9__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZSmRegularIcon);
export default ForwardRef;
