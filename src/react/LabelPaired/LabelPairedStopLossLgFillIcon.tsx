import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossLgFillIcon = (
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
      <path d='M5.742 21.086a6.3 6.3 0 0 1-1.797-1.367l-.39-.469 2.383-2.383.43.469c.585.703 1.288 1.016 2.148 1.016.507 0 .742-.118.859-.196.117-.117.156-.234.156-.43a.66.66 0 0 0-.078-.351c-.039 0-.039-.04-.117-.078a1.5 1.5 0 0 0-.469-.078l-1.015-.157c-1.211-.156-2.188-.507-2.813-1.171H5c-.625-.703-.898-1.563-.898-2.578 0-.547.078-1.055.312-1.524s.547-.898.938-1.25c.39-.312.898-.586 1.445-.742.547-.195 1.172-.274 1.836-.274.86 0 1.64.118 2.344.43.664.274 1.25.703 1.757 1.25l.391.43-2.383 2.422-.469-.508A3.4 3.4 0 0 0 9.57 13h-.039a2.16 2.16 0 0 0-1.015-.234c-.47 0-.703.117-.782.156-.078.078-.117.117-.117.273 0 .117.04.196.04.235s.038.039.038.039c.078.078.274.156.664.234l1.016.156c1.133.157 2.11.547 2.734 1.172.664.625.977 1.524.977 2.54 0 .585-.117 1.132-.313 1.64a3.5 3.5 0 0 1-.976 1.289c-.39.352-.899.625-1.485.82-.585.196-1.25.274-1.914.274-1.015 0-1.875-.157-2.617-.508zm7.969.352V9.718h3.555v8.438h3.984v3.282z' />
    </g>
    <defs>
      <clipPath id='cf4356132b2f1b4e25cba4661418ff2a__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossLgFillIcon);
export default ForwardRef;
