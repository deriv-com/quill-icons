import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSmRegularIcon = (
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
      <path d='M7 3.75a.47.47 0 0 1 .438.438v1.34a5.26 5.26 0 0 1 4.785 4.785h1.34a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-1.34A5.264 5.264 0 0 1 7.437 16v1.313A.45.45 0 0 1 7 17.75a.43.43 0 0 1-.437-.437V16a5.266 5.266 0 0 1-4.813-4.812H.438A.43.43 0 0 1 0 10.75a.45.45 0 0 1 .438-.437H1.75a5.26 5.26 0 0 1 4.813-4.786v-1.34A.45.45 0 0 1 7 3.75m-4.375 7c0 1.586.82 3.008 2.188 3.8a4.32 4.32 0 0 0 4.375 0c1.34-.792 2.187-2.214 2.187-3.8 0-1.559-.848-2.98-2.187-3.773a4.32 4.32 0 0 0-4.376 0 4.34 4.34 0 0 0-2.187 3.773m6.125 0c0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531m-4.375 0c0-.93.492-1.777 1.313-2.27a2.65 2.65 0 0 1 2.625 0c.792.493 1.312 1.34 1.312 2.27 0 .957-.52 1.805-1.312 2.297a2.65 2.65 0 0 1-2.626 0 2.65 2.65 0 0 1-1.312-2.297' />
    </g>
    <defs>
      <clipPath id='9c61e27576666b9cf3004b449e0add64__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSmRegularIcon);
export default ForwardRef;
