import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternLgRegularIcon = (
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
      <path d='M3.125 8c0-1.016.82-1.875 1.875-1.875.781 0 1.484.547 1.758 1.25h3.945c.274-.703.977-1.25 1.797-1.25.781 0 1.484.547 1.758 1.25h3.945c.274-.703.977-1.25 1.797-1.25 1.016 0 1.875.86 1.875 1.875 0 1.055-.86 1.875-1.875 1.875-.312 0-.586-.04-.82-.156l-5 5c.117.234.195.508.195.781 0 1.055-.86 1.875-1.875 1.875-.312 0-.586-.04-.82-.156l-5 5c.039.039.039.117.078.156h3.945c.274-.703.977-1.25 1.797-1.25.781 0 1.484.547 1.758 1.25h3.945c.274-.703.977-1.25 1.797-1.25 1.016 0 1.875.86 1.875 1.875 0 1.055-.86 1.875-1.875 1.875-.82 0-1.523-.508-1.797-1.25h-3.945c-.274.742-.977 1.25-1.758 1.25-.82 0-1.523-.508-1.797-1.25H6.758a1.91 1.91 0 0 1-1.797 1.25A1.875 1.875 0 0 1 3.086 23c0-1.016.86-1.875 1.875-1.875.312 0 .586.078.82.195l5-5a1.8 1.8 0 0 1-.195-.82c0-1.016.86-1.875 1.875-1.875.312 0 .586.078.82.195l5-5c-.039-.039-.039-.117-.078-.195h-3.945c-.274.742-.977 1.25-1.758 1.25-.82 0-1.523-.508-1.797-1.25H6.758c-.274.742-.977 1.25-1.758 1.25A1.85 1.85 0 0 1 3.125 8m0 7.5c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.875 0 .546-.35.937-.937.937-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.875 0-.586.352-.938.938-.938 1.602m15 0c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.875 0 .546-.35.937-.937.937-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.875 0-.586.352-.938.938-.938 1.602' />
    </g>
    <defs>
      <clipPath id='5219cae4628ac6cb70491d7cc85f6fef__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternLgRegularIcon);
export default ForwardRef;
