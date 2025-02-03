import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightLgBoldIcon = (
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
      <path d='M19.61 13a2.475 2.475 0 0 1-1.876 2.422l-1.757 3.71c.078.157.156.313.195.43l.273.625c.235.547.196 1.172-.039 1.72l-.117.234a3.71 3.71 0 0 1-3.047 2.109h-.078a3.9 3.9 0 0 1-1.875-.352L8.516 22.57a2.865 2.865 0 0 1-1.407-3.867l1.094-2.305c.352-.78 1.328-1.132 2.07-.742.04 0 .079.04.118.04l.078.077a1.59 1.59 0 0 1 1.562-.156c.117.078.235.117.352.195a1.59 1.59 0 0 1 1.562-.156c.04.04.078.04.117.078l.04.04.78-1.602c-.194-.352-.273-.742-.273-1.172 0-1.367 1.133-2.5 2.5-2.5 1.368 0 2.5 1.133 2.5 2.5m-2.383-.117c.468.234.78.625.859 1.094a1.384 1.384 0 0 0-.976-2.344c-.743 0-1.368.586-1.368 1.328.43-.274.977-.313 1.485-.078m-3.243 7.773 2.461-5.234.47-1.055a.39.39 0 0 0-.196-.43c-.157-.078-.39 0-.508.118l-.469 1.054-.976 2.032a.55.55 0 0 1-.586.312.51.51 0 0 1-.508-.43c-.04-.156-.117-.234-.235-.273-.156-.078-.43-.04-.507.156l-.078.196c-.118.195-.352.351-.586.312-.274 0-.47-.234-.508-.469-.04-.117-.117-.195-.235-.273-.195-.078-.43 0-.507.195a.61.61 0 0 1-.508.313.68.68 0 0 1-.547-.274.47.47 0 0 0-.195-.195c-.157-.078-.43 0-.508.195l-1.094 2.305c-.39.86-.039 1.914.82 2.305l2.813 1.328q.585.292 1.289.234h.078a2.53 2.53 0 0 0 2.07-1.445l.118-.235a.91.91 0 0 0 0-.78l-.235-.587-.43.938a.45.45 0 0 1-.546.195c-.157-.078-.274-.312-.157-.508m6.68-13.906c.313 0 .586.273.586.547v16.445c0 .274-.273.547-.586.547a.56.56 0 0 1-.547-.547V7.297c0-.274.235-.547.547-.547' />
    </g>
    <defs>
      <clipPath id='b4298f5a7c42551922da0cfb987997b2__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightLgBoldIcon);
export default ForwardRef;
