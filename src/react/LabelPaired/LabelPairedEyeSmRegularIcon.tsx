import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSmRegularIcon = (
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
      <path d='M3.324 7.469A11.4 11.4 0 0 0 1.848 9.19q-.575.876-.848 1.559.273.683.848 1.559.6.875 1.476 1.722a8 8 0 0 0 2.051 1.395Q6.551 15.973 8 16q1.449-.028 2.625-.574a8 8 0 0 0 2.05-1.395 11.4 11.4 0 0 0 1.477-1.722q.575-.876.848-1.559-.273-.683-.848-1.559a11.4 11.4 0 0 0-1.476-1.722 8 8 0 0 0-2.051-1.395Q9.449 5.528 8 5.5q-1.449.027-2.625.574-1.15.548-2.05 1.395M8 4.625q1.668.027 2.98.656 1.313.63 2.297 1.559a10.5 10.5 0 0 1 1.586 1.86q.63.956.957 1.722a.82.82 0 0 1 0 .656q-.327.766-.957 1.723t-1.586 1.86a9 9 0 0 1-2.296 1.558q-1.313.629-2.981.656-1.668-.027-2.98-.656a9 9 0 0 1-2.297-1.559 10.5 10.5 0 0 1-1.586-1.86q-.63-.956-.93-1.722a.82.82 0 0 1 0-.656q.3-.766.93-1.723.629-.957 1.586-1.86A9 9 0 0 1 5.02 5.282Q6.332 4.652 8 4.625M5.375 10.75q0 .711.355 1.313.356.6.957.957.63.355 1.313.355a2.63 2.63 0 0 0 2.27-1.312q.355-.602.355-1.313 0-.71-.355-1.312A2.63 2.63 0 0 0 8 8.126a2.63 2.63 0 0 0-2.27 1.311 2.53 2.53 0 0 0-.355 1.313m6.125 0q0 .957-.465 1.75T9.75 13.785q-.82.465-1.75.465t-1.75-.465A3.6 3.6 0 0 1 4.965 12.5a3.4 3.4 0 0 1-.465-1.75q0-.957.465-1.75T6.25 7.715A3.5 3.5 0 0 1 8 7.25q.93 0 1.75.465.82.492 1.285 1.285t.465 1.75' />
    </g>
    <defs>
      <clipPath id='2325af044285a454257dd8c6cdab3d81__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSmRegularIcon);
export default ForwardRef;
