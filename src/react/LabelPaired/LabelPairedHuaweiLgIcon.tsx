import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHuaweiLgIcon = (
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
      <path d='M3.79 9.406s4.023 4.844 6.991 11.29v.038l-.039.078c-.039.04-.078 0-.078 0-1.094-.546-5.703-2.89-7.617-4.726 0 0-1.172-.938-1.29-2.5v-.39c.118-1.954 2.032-3.79 2.032-3.79m6.25 12.969v.04zs0 .04-.04.117c-.742.508-3.047 2.11-4.062 2.383-1.446.352-2.852-.82-3.711-2.305l7.695-.273s.078 0 .117.078m.077-.781s.04 0 .04.039v.078s-.04.039-.079.039H4.297s-.742 0-1.445-.312c0 0-1.602-.547-2.461-2.305 0 0-.391-.781-.391-1.914v-.04c0-.429.04-.898.195-1.366 0 0 6.563 3.476 9.922 5.78M9.414 6.359V6.32s.899-.195 1.25-.234c0 0 2.266 2.969 1.172 13.984 0 .04-.04.04-.04.078l-.038.04s-.04 0-.117-.04c-.703-1.054-4.024-5.976-4.727-9.023 0 0-.156-.469-.156-1.094v-.39a3.67 3.67 0 0 1 .781-2.11A3.3 3.3 0 0 1 9.414 6.36m8.633 2.344c.39.977 0 2.422 0 2.422-.664 3.008-3.985 7.93-4.727 9.023 0 0-.039.04-.117.04 0 0-.039-.04-.078-.118-1.094-11.054 1.172-13.984 1.172-13.984.625.117 1.21.234 1.21.234 2.032.508 2.54 2.383 2.54 2.383m-3.008 13.633v-.04H15l7.734.274c-1.172 1.992-2.422 2.344-3.125 2.344h-.156c-.273 0-.469-.039-.469-.039-1.054-.312-3.28-1.875-4.023-2.383-.04-.039-.04-.117-.04-.117.04-.04.118-.04.118-.04m8.125-8.79c-.039 1.563-1.25 2.54-1.25 2.54-1.875 1.836-6.484 4.18-7.578 4.727h-.118c-.038-.079 0-.157 0-.157 2.93-6.367 6.954-11.25 6.954-11.25s2.148 1.992 1.992 4.14m1.602 2.227v.04c.586 1.757-.196 3.242-.196 3.242-.82 1.836-2.46 2.383-2.46 2.383-.743.273-1.329.273-1.329.273-.117.039-4.687.039-5.898.039-.04 0-.078-.078-.078-.078 0-.04.039-.117.039-.117 3.36-2.266 9.922-5.782 9.922-5.782' />
    </g>
    <defs>
      <clipPath id='c1cf22d838e785bdc8b08c99d99490a8__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiLgIcon);
export default ForwardRef;
