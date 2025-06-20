import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 5.5c.664 0 1.25.586 1.25 1.25v1.406c.04 0 .117.04.156.04h.04l1.874.35a1.24 1.24 0 0 1 1.016 1.446 1.27 1.27 0 0 1-1.445 1.016l-1.875-.352c-1.211-.195-2.305-.039-3.047.235-.742.312-1.055.742-1.133 1.093-.078.43 0 .664.039.82.078.157.234.313.508.508.625.43 1.601.704 2.89 1.016l.118.04c1.093.312 2.46.663 3.476 1.327.547.352 1.094.86 1.406 1.524.352.703.391 1.484.274 2.343-.274 1.485-1.328 2.461-2.578 2.97-.547.234-1.133.35-1.719.429v1.289c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-1.328c-.04-.04-.04-.04-.078-.04-.938-.116-2.5-.546-3.555-1.015a1.23 1.23 0 0 1-.664-1.64c.313-.625 1.016-.938 1.68-.625.781.351 2.148.703 2.93.82 1.25.195 2.265.078 2.968-.195.664-.274.938-.665 1.055-1.133.039-.43 0-.664-.078-.782A1.26 1.26 0 0 0 9 17.767c-.625-.391-1.602-.664-2.89-1.016l-.118-.04c-1.094-.273-2.46-.663-3.476-1.327-.547-.352-1.094-.86-1.407-1.524-.312-.703-.39-1.484-.234-2.304.273-1.524 1.406-2.461 2.656-2.97.547-.233 1.094-.35 1.719-.429V6.75c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='46598c4070d7625b3a318efe12ebde22__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignLgFillIcon);
export default ForwardRef;
