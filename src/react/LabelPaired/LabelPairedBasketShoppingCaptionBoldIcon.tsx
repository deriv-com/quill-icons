import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingCaptionBoldIcon = (
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
      <path d='M5.945 3.57c.258.14.375.493.235.774L4.258 8h5.46L7.798 4.344a.595.595 0 0 1 .234-.774.595.595 0 0 1 .774.235L10.985 8h2.203a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.47l-1.312 5.25A1.505 1.505 0 0 1 9.953 15.5H4.047c-.703 0-1.29-.469-1.477-1.125l-1.289-5.25H.813a.54.54 0 0 1-.563-.562C.25 8.258.484 8 .813 8h2.179l2.18-4.195a.595.595 0 0 1 .773-.235M2.43 9.125l1.242 4.969a.38.38 0 0 0 .375.281h5.906a.37.37 0 0 0 .352-.281l1.242-4.969zm3.07 1.688v1.874a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563M7 10.25a.57.57 0 0 1 .563.563v1.874A.555.555 0 0 1 7 13.25a.54.54 0 0 1-.562-.562v-1.876c0-.304.234-.562.562-.562m2.625.563v1.874a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563' />
    </g>
    <defs>
      <clipPath id='70f7b7d485cc1f9e7a56475835fd7432__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingCaptionBoldIcon);
export default ForwardRef;
