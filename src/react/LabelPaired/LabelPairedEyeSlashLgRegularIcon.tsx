import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.977 5.656 23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L.234 6.633c-.273-.195-.351-.625-.117-.86.195-.273.625-.351.86-.117m22.656 10.352c-.39.937-1.094 2.226-2.11 3.476l-.976-.78A14.4 14.4 0 0 0 22.5 15.5c-.547-1.25-1.68-3.125-3.36-4.687S15.235 8 12.5 8c-1.562 0-2.969.43-4.18 1.055l-1.054-.86C8.75 7.335 10.469 6.75 12.5 6.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977M3.438 11.555l.976.78A12.6 12.6 0 0 0 2.5 15.5c.508 1.25 1.64 3.125 3.32 4.688S9.727 23 12.5 23c1.523 0 2.93-.39 4.14-1.016l1.055.86A10.1 10.1 0 0 1 12.5 24.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.39-.937 1.094-2.226 2.11-3.476M12.5 20.5c-2.773 0-5-2.227-5-5 0-.234 0-.469.04-.703l1.21.937a3.73 3.73 0 0 0 3.75 3.516c.195 0 .43 0 .625-.04l1.21.938a5 5 0 0 1-1.835.352m5-5v.04c0 .233-.04.468-.078.702l-1.211-.937c-.117-1.992-1.719-3.516-3.711-3.516-.234 0-.469 0-.664.04l-1.211-.938c.586-.235 1.21-.391 1.875-.391 2.734 0 5 2.266 5 5' />
    </g>
    <defs>
      <clipPath id='0ec3f039654d72f03f4cfb383a96514a__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashLgRegularIcon);
export default ForwardRef;
