import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.188 5.5h20.625q.858.078.937.938-.079.859-.937.937H1.188q-.86-.078-.938-.937.078-.86.938-.938M1.5 8.625h1.875v8.438q.039.273.313.312h15.625q.273-.039.312-.312V8.625H21.5v8.438q-.039.937-.625 1.562-.625.585-1.562.625h-6.875v1.797l2.851 2.851q.548.665 0 1.329-.664.546-1.328 0L11.5 22.766l-2.46 2.46q-.665.547-1.33 0-.546-.663 0-1.328l2.853-2.851V19.25H3.686q-.936-.039-1.562-.625Q1.54 18 1.5 17.063z' />
    </g>
    <defs>
      <clipPath id='e300f6baf9b63d63c274964e3fd2d20b__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenLgBoldIcon);
export default ForwardRef;
