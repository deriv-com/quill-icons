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
      <path d='M5.719 4.367 1.57 6.125q-.421.211-.445.656 0 1.125.375 2.625.399 1.477 1.383 2.883 1.009 1.407 2.812 2.32a.7.7 0 0 0 .61 0q1.805-.89 2.789-2.32 1.008-1.405 1.406-2.883.375-1.5.375-2.625-.024-.445-.445-.656L6.305 4.367a.76.76 0 0 0-.586 0m.867-.68 4.148 1.758q.399.165.633.516.258.351.258.82.024 1.196-.398 2.813t-1.524 3.14Q8.625 14.281 6.61 15.29a1.39 1.39 0 0 1-1.218 0q-2.016-1.008-3.094-2.555-1.102-1.523-1.524-3.14T.375 6.78q0-.469.258-.82a1.37 1.37 0 0 1 .633-.516l4.148-1.758q.585-.234 1.172 0M6 7.814q-.516.046-.562.562.045.515.562.563.516-.048.563-.563-.048-.516-.563-.562m1.313.562q0 .446-.258.797a1.4 1.4 0 0 1-.68.469v1.734q-.023.352-.375.375-.352-.023-.375-.375V9.641a1.4 1.4 0 0 1-.68-.47 1.3 1.3 0 0 1-.258-.796q.024-.562.375-.937.375-.353.938-.375.563.022.938.375.351.375.375.937' />
    </g>
    <defs>
      <clipPath id='493302859f0fcf37fbe5a118dca6fdc0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckCaptionRegularIcon);
export default ForwardRef;
