import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditSmIcon = (
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
      <path d='M0 10.75c0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7 0 3.883-3.145 7-7 7H1.012a.413.413 0 0 1-.301-.71l1.34-1.34C.766 14.44 0 12.69 0 10.75m9.543-2.79a1.161 1.161 0 1 0 0-2.324 1.17 1.17 0 0 0-1.148.93c-.93.082-1.668.903-1.668 1.86a5.94 5.94 0 0 0-2.707.793 1.8 1.8 0 0 0-1.012-.328c-.903 0-1.613.738-1.613 1.64 0 .656.382 1.203.93 1.477.054 1.887 2.132 3.418 4.675 3.418s4.594-1.531 4.648-3.418c.547-.274.93-.848.93-1.477 0-.902-.71-1.64-1.613-1.64-.383 0-.738.109-1.012.328-.738-.465-1.695-.739-2.734-.793 0-.684.52-1.285 1.203-1.367.11.52.574.902 1.121.902M4.84 10.505c.437 0 .793.492.765 1.094-.027.574-.355.793-.82.793s-.875-.246-.848-.82c.028-.602.438-1.067.903-1.067m5.195 1.066c.027.575-.383.82-.848.82-.437 0-.792-.218-.82-.792-.027-.602.328-1.094.793-1.094.438 0 .848.465.875 1.066m-1.312 1.532c-.301.683-.957 1.148-1.723 1.148-.793 0-1.45-.465-1.723-1.148-.054-.082 0-.165.11-.165.492-.054 1.039-.082 1.613-.082.547 0 1.094.028 1.613.082.082 0 .137.083.11.165' />
    </g>
    <defs>
      <clipPath id='1b5cd8d7794cc7a0c70ac89d26256b5f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditSmIcon);
export default ForwardRef;
