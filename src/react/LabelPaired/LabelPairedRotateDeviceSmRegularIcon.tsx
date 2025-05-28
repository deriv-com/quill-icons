import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m3.719 8.645.93-.93-.192-.192-.93.93zm7.71 2.734c.41.437.41 1.121 0 1.559l-2.488 2.46a1.057 1.057 0 0 1-1.53 0L2.46 10.45a1.057 1.057 0 0 1 0-1.531L4.92 6.43a1.14 1.14 0 0 1 1.56 0zM4.978 7.414a.396.396 0 0 1 0 .574l-.985.985a.365.365 0 0 1-.547 0l-.218-.22-.465.466c-.274.273-.274.683 0 .93l4.949 4.949c.246.246.656.246.93 0l2.46-2.461c.274-.274.274-.684 0-.93l-4.949-4.95c-.246-.273-.656-.273-.93 0l-.464.466.219.218zm6.398-.93a4.5 4.5 0 0 0-.684-.574l-.218-.164c-.301-.164-.575-.3-.903-.41l-.3-.11-.301-.081c-.192-.055-.41-.082-.602-.11l1.121 1.149-.3.3-1.532-1.53-.355-.384h.82c.328.028.629.082.93.137l.355.11.328.109c.329.11.657.273.957.465l.274.164c.246.191.492.383.71.629a5.45 5.45 0 0 1 1.614 3.855h-.437c0-1.285-.493-2.57-1.477-3.555m-8.887 8.887c.219.191.438.383.684.547l.246.164c.273.191.574.328.875.438l.3.109.329.082c.191.055.383.082.574.11l-1.121-1.15.3-.3 1.532 1.531.383.383h-.547l-.3-.027c-.302 0-.63-.055-.93-.137l-.356-.082-.328-.11c-.328-.136-.656-.273-.957-.464l-.246-.192a4 4 0 0 1-.739-.601 5.45 5.45 0 0 1-1.613-3.856h.438c0 1.286.492 2.57 1.476 3.555' />
    </g>
    <defs>
      <clipPath id='b6235e4c42864b089e4d1672604ec69e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceSmRegularIcon);
export default ForwardRef;
