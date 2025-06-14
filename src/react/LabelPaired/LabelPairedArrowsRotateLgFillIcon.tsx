import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateLgFillIcon = (
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
      <path d='M4.102 13.43c-.235.664-.977 1.015-1.602.78a1.25 1.25 0 0 1-.781-1.6 8.8 8.8 0 0 1 2.07-3.282 8.794 8.794 0 0 1 12.383 0l.664.703V8.625c0-.664.586-1.25 1.25-1.25.703 0 1.25.586 1.25 1.25V13c0 .703-.547 1.25-1.25 1.25H13.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.328l-.664-.664a6.32 6.32 0 0 0-8.867 0c-.664.703-1.172 1.484-1.445 2.344m-2.579 3.398c.04-.039.118-.039.157-.039.078 0 .117-.039.195-.039H6.25c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H4.883l.664.703a6.32 6.32 0 0 0 8.867 0c.664-.703 1.172-1.484 1.445-2.344.235-.664.977-1.015 1.602-.78a1.25 1.25 0 0 1 .781 1.6c-.43 1.212-1.133 2.305-2.07 3.282a8.794 8.794 0 0 1-12.383 0l-.664-.703v1.367c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-4.531c0-.078 0-.117.04-.157.038-.195.155-.39.312-.546.156-.157.351-.274.546-.313' />
    </g>
    <defs>
      <clipPath id='f6c727510500d285709a19aed1813fdf__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateLgFillIcon);
export default ForwardRef;
