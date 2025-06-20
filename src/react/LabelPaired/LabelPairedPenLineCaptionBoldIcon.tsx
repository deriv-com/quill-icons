import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.555 13.79.539-1.83c.093-.327.281-.632.515-.866l7.125-7.125a1.514 1.514 0 0 1 2.133 0l.914.914c.07.07.14.164.188.234a1.495 1.495 0 0 1-.188 1.899L4.656 14.14c-.023.023-.07.046-.093.093a2.5 2.5 0 0 1-.774.422l-1.828.54-1.008.28a.48.48 0 0 1-.539-.14.48.48 0 0 1-.14-.54zm1.453-.962-.375 1.29 1.289-.376.539-.164a.86.86 0 0 0 .398-.234l5.368-5.367-1.454-1.454-5.367 5.368c-.023 0-.023.023-.047.046-.093.094-.14.211-.187.352zm4.055 1.547h7.125a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H6.062a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='0ecfb17c182c3f68252bc7f9246b6cc5__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineCaptionBoldIcon);
export default ForwardRef;
