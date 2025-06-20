import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.695 4.39 1.547 6.149a.634.634 0 0 0-.422.633c0 2.203.914 6.094 4.57 7.852a.65.65 0 0 0 .586 0c3.657-1.758 4.57-5.649 4.594-7.852 0-.281-.187-.515-.445-.633L6.28 4.391a.65.65 0 0 0-.586 0m.89-.702 4.126 1.757c.516.235.914.727.914 1.336-.023 2.344-.984 6.586-5.016 8.532a1.44 1.44 0 0 1-1.242 0C1.336 13.367.375 9.125.375 6.78c-.023-.61.375-1.101.89-1.336l4.15-1.758a1.46 1.46 0 0 1 1.17 0M6 7.812a.555.555 0 0 0-.562.563c0 .328.234.563.562.563a.555.555 0 0 0 .563-.563A.57.57 0 0 0 6 7.813m1.313.563c0 .61-.399 1.102-.938 1.266v1.734c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V9.641a1.29 1.29 0 0 1-.937-1.266c0-.703.585-1.312 1.312-1.312.703 0 1.313.609 1.313 1.312' />
    </g>
    <defs>
      <clipPath id='dc42d19620e9d9eedc34d46ba051aa87__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckCaptionRegularIcon);
export default ForwardRef;
