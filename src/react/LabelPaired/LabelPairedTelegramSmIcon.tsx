import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramSmIcon = (
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
      <path d='M7 3.969c3.719 0 6.781 3.062 6.781 6.781 0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 0 1 .219 10.75C.219 7.031 3.254 3.969 7 3.969m3.117 4.62a.46.46 0 0 0 0-.273c0-.054-.055-.136-.082-.164-.082-.082-.219-.082-.273-.082-.246 0-.657.137-2.543.93-.657.273-1.969.82-3.938 1.695-.328.137-.492.246-.52.383-.027.219.329.3.739.438.355.109.82.246 1.066.246.22 0 .465-.082.739-.274 1.832-1.258 2.789-1.886 2.843-1.886.055 0 .11-.028.137 0 .055.054.055.109.027.136-.027.137-1.75 1.723-1.859 1.832-.383.383-.82.63-.137 1.067.575.383.903.629 1.504 1.011.383.247.684.547 1.067.52.191-.027.383-.191.465-.711.246-1.176.683-3.8.765-4.867' />
    </g>
    <defs>
      <clipPath id='898abebe480015606fa92345c559b922__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramSmIcon);
export default ForwardRef;
