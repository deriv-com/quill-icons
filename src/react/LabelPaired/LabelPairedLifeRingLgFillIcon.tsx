import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.336 21.633-2.266-2.266c-.625.352-1.328.508-2.07.508-.781 0-1.484-.156-2.11-.508l-2.265 2.266a7.618 7.618 0 0 0 8.71 0m3.516.039h.039c.351.469.273 1.172-.157 1.601s-1.132.47-1.601.118A9.96 9.96 0 0 1 10 25.5a10 10 0 0 1-6.172-2.11 1.246 1.246 0 0 1-1.601-.117 1.246 1.246 0 0 1-.118-1.601A10 10 0 0 1 0 15.5c0-2.305.781-4.414 2.11-6.133a1.246 1.246 0 0 1 .117-1.601c.43-.43 1.132-.508 1.601-.157C5.547 6.32 7.656 5.5 10 5.5c2.305 0 4.414.82 6.133 2.11.469-.352 1.172-.274 1.601.156s.47 1.132.118 1.601A9.96 9.96 0 0 1 19.96 15.5a10 10 0 0 1-2.11 6.172m-1.758-1.797c.86-1.25 1.406-2.734 1.406-4.375 0-1.602-.547-3.086-1.406-4.336l-2.266 2.266c.352.625.508 1.328.508 2.07 0 .781-.156 1.484-.508 2.11zM14.336 9.406C13.086 8.546 11.602 8 10 8c-1.64 0-3.125.547-4.375 1.406l2.266 2.266a4.2 4.2 0 0 1 2.07-.547 4.24 4.24 0 0 1 2.11.547zM6.133 17.61c-.352-.625-.508-1.328-.508-2.07 0-.781.156-1.484.508-2.11l-2.266-2.265a7.62 7.62 0 0 0 0 8.711zM8.125 15.5c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602' />
    </g>
    <defs>
      <clipPath id='a65f8c6e8a05071ef3431fbcc5cf69b3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingLgFillIcon);
export default ForwardRef;
