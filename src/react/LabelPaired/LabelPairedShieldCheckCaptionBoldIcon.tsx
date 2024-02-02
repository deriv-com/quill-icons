import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckCaptionBoldIcon = (
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
      <path d='M1.71 6.477q-.21.117-.21.304 0 1.102.375 2.532.375 1.406 1.313 2.765.96 1.335 2.671 2.203a.43.43 0 0 0 .282 0q1.71-.867 2.672-2.203.937-1.36 1.312-2.765.375-1.43.375-2.532 0-.187-.21-.304L6 4.648zm9.024-1.032q.399.165.633.516.258.351.258.82.024 1.196-.398 2.813t-1.524 3.14Q8.625 14.281 6.61 15.29a1.39 1.39 0 0 1-1.218 0q-2.016-1.008-3.094-2.555-1.102-1.523-1.524-3.14T.375 6.78q0-.469.258-.82a1.37 1.37 0 0 1 .633-.516l4.43-1.875A.7.7 0 0 1 6 3.5q.164 0 .305.07zm-3.421 2.93q-.048.82-.75 1.195v1.617q-.048.516-.563.563-.516-.047-.562-.562V9.57q-.705-.375-.75-1.195.022-.562.375-.937.375-.353.937-.375.563.022.938.375.351.375.375.937' />
    </g>
    <defs>
      <clipPath id='d0cc139586a06176__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckCaptionBoldIcon);
export default ForwardRef;
