import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationLgFillIcon = (
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
      <path d='M15.703 21.242v-.039l.04.04c.624.234 1.366.35 2.109.35 1.093 0 2.03-.234 2.773-.741q1.113-.762 1.758-2.11l.234-.508-3.008-1.757-.234.703a2.1 2.1 0 0 1-.586.86c-.195.155-.469.273-.937.273-.508 0-.86-.157-1.133-.43-.274-.274-.43-.742-.43-1.485v-1.68c0-.741.156-1.171.43-1.445.273-.312.625-.468 1.133-.468.507 0 .742.117.898.234.195.195.352.43.469.781l.234.703 3.125-1.64-.234-.547q-.586-1.406-1.758-2.11c-.742-.507-1.68-.703-2.734-.703-.782 0-1.485.118-2.149.391-.664.313-1.21.703-1.68 1.25a5.2 5.2 0 0 0-1.054 1.953c-.235.742-.352 1.602-.352 2.54s.117 1.757.352 2.5v.038a5.5 5.5 0 0 0 1.054 1.875 4.66 4.66 0 0 0 1.68 1.172M7.11 9.72c.743 0 1.485.117 2.11.351.664.274 1.25.625 1.719 1.172.468.508.82 1.133 1.054 1.836.235.742.352 1.563.352 2.5 0 .899-.117 1.758-.352 2.461v.04c-.234.702-.586 1.327-1.055 1.835a4.3 4.3 0 0 1-1.718 1.133c-.625.273-1.328.39-2.11.39H2.54V9.72zm1.172 8.047c.235-.235.39-.625.39-1.407v-1.601c0-.781-.155-1.172-.39-1.367-.234-.274-.586-.43-1.172-.43H6.094v5.195h1.015c.586 0 .938-.156 1.172-.39' />
    </g>
    <defs>
      <clipPath id='8b4329afbe23740e55cce68e2edc14a7__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationLgFillIcon);
export default ForwardRef;
