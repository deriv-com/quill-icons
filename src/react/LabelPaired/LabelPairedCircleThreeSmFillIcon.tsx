import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.031 7.25c-.383 0-.656.3-.656.656 0 .383.273.657.656.657h1.805L5.44 9.848a.63.63 0 0 0-.164.71.69.69 0 0 0 .63.41H7.3a.98.98 0 0 1 .984.985.98.98 0 0 1-.984.985h-.766c-.355 0-.683-.165-.902-.493l-.055-.11c-.191-.3-.601-.41-.902-.218s-.41.602-.219.902l.082.11c.41.71 1.176 1.121 2.024 1.121H7.3c1.285 0 2.324-1.012 2.324-2.297 0-1.176-.902-2.16-2.05-2.27l1.394-1.285c.191-.191.273-.464.164-.71-.11-.247-.356-.438-.602-.438z' />
    </g>
    <defs>
      <clipPath id='277857a50b40bdeba9a9bd6e688a7cfe__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeSmFillIcon);
export default ForwardRef;
