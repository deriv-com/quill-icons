import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinuxLgIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.883 10.305h-.078c-.026 0-.052-.013-.078-.04 0-.025.013-.038.039-.038a.195.195 0 0 1 .234 0 .255.255 0 0 1 .117.117c-.026.026-.065.039-.117.039-.026 0-.052-.013-.078-.04-.026 0-.04-.012-.04-.038m-.86.078c-.052 0-.09-.013-.117-.04 0-.051.04-.09.117-.116a.195.195 0 0 1 .235 0c.026 0 .026.013 0 .039 0 .026-.026.039-.078.039h-.04l-.038.039c-.026.026-.053.039-.079.039m8.633 10.898c.417.469.612.847.586 1.133-.026.313-.195.56-.508.742-.182.104-.377.209-.586.313a3.71 3.71 0 0 0-1.406.937c-.599.677-1.237 1.042-1.914 1.094-.677.052-1.198-.247-1.562-.898a.482.482 0 0 1-.079-.274c-.468 0-.885-.026-1.25-.078A6.194 6.194 0 0 0 9 24.172c-.443.026-.82.078-1.133.156-.26.052-.508.091-.742.117-.208.417-.547.677-1.016.782-.65.13-1.38-.014-2.187-.43a5.348 5.348 0 0 0-1.602-.39c-.26-.027-.494-.053-.703-.079-.364-.052-.625-.208-.781-.469-.156-.286-.13-.703.078-1.25a1.772 1.772 0 0 0 0-.742c0-.026-.013-.052-.039-.078a2.847 2.847 0 0 1-.04-.469c0-.156.04-.312.118-.468.208-.313.456-.508.742-.586.026 0 .052-.013.078-.04a1.36 1.36 0 0 0 .586-.273c.079-.078.157-.182.235-.312.13-.183.26-.339.39-.47a4.76 4.76 0 0 1 .235-2.07 9.678 9.678 0 0 1 1.054-2.148c.443-.65.847-1.198 1.211-1.64.573-.834.873-1.68.899-2.54 0-.182-.013-.43-.04-.742a11.713 11.713 0 0 1 0-1.914c.053-.677.3-1.276.743-1.797.443-.52 1.224-.794 2.344-.82.99.026 1.692.313 2.11.86.416.546.676 1.197.78 1.952.078.756.104 1.459.078 2.11v.195c0 .573.118 1.08.352 1.524.26.442.56.859.898 1.25l.04.039c.312.364.637.794.976 1.289a6.91 6.91 0 0 1 .82 1.64c.417.964.47 1.993.157 3.086l.156.078a.613.613 0 0 1 .156.118c.235.234.378.52.43.859v.04c.052.312.143.559.273.741M9 8.898c-.13.287-.17.573-.117.86.156.026.325.091.508.195-.052-.26-.026-.482.078-.664.104-.182.234-.26.39-.234.157 0 .274.117.352.351.078.209.078.443 0 .703a.256.256 0 0 1-.117.118l-.04.039c.261.104.417.169.47.195.338-.417.403-.938.195-1.563-.235-.416-.521-.625-.86-.625-.364 0-.65.209-.859.625m-1.602-.43c-.364.053-.585.313-.664.782-.078.495.04.912.352 1.25.208-.156.286-.221.234-.195v-.04c-.156-.156-.234-.364-.234-.624.026-.26.117-.417.273-.47.13 0 .235.092.313.274a.843.843 0 0 1 .078.508c.13-.078.26-.143.39-.195.027-.365-.038-.677-.195-.938-.156-.234-.338-.351-.547-.351m-.546 2.384v-.04c-.157.13-.209.3-.157.508.052.209.248.404.586.586.13.078.248.17.352.274.13.13.273.234.43.312a.87.87 0 0 0 .39.078c.443 0 .794-.117 1.055-.351.13-.104.273-.182.43-.235.468-.156.755-.39.859-.703.104-.338-.026-.573-.39-.703a2.448 2.448 0 0 0-.47-.156 2.161 2.161 0 0 1-.43-.195c-.39-.26-.728-.378-1.015-.352-.495.078-.833.247-1.015.508-.026 0-.04.013-.04.039a3.75 3.75 0 0 0-.351.234 1.55 1.55 0 0 0-.234.196m.156 13.046c0-.26-.091-.546-.274-.859a8.775 8.775 0 0 0-.664-.898 5.754 5.754 0 0 1-.664-.938l-.781-1.406c-.26-.365-.547-.573-.86-.625-.286-.052-.507.039-.663.273a2.935 2.935 0 0 0-.274.313l-.312.39c-.183.157-.378.26-.586.313l-.157.078a.827.827 0 0 0-.585.43c-.105.208-.118.468-.04.781v.117c.079.287.079.56 0 .82-.156.521-.182.873-.078 1.055.183.26.6.404 1.25.43.573 0 1.146.143 1.72.43.65.312 1.288.442 1.913.39.6-.078.95-.443 1.055-1.094m-.078-1.015c.755.469 1.536.65 2.343.547a4.686 4.686 0 0 0 2.149-.86v-.039c.13-.416.208-.781.234-1.093a7.775 7.775 0 0 1 .196-1.524c.104-.52.377-.885.82-1.094.052-.39.221-.612.508-.664.26-.052.599.013 1.015.196.703.312.99.65.86 1.015h.195c.078-.338-.026-.612-.312-.82a2.869 2.869 0 0 0-.899-.547A2.86 2.86 0 0 0 14 16.594a4.386 4.386 0 0 0-.586-1.328c-.26-.417-.52-.743-.781-.977-.104 0-.065.091.117.274.26.234.534.664.82 1.289.287.625.313 1.302.078 2.03a1.367 1.367 0 0 0-.43-.077 7.562 7.562 0 0 0-.429-1.524c-.182-.442-.338-.768-.469-.976-.26-.443-.52-1.029-.78-1.758a20.572 20.572 0 0 1-.704-1.992c-.182.26-.469.455-.86.586l-.39.195-.234.156c-.573.339-1.12.326-1.641-.039a1.28 1.28 0 0 1-.195-.156 1.224 1.224 0 0 0-.313-.235 1.554 1.554 0 0 0-.234-.195A7.088 7.088 0 0 1 6.5 13.82c-.26.677-.52 1.29-.781 1.836-.104.235-.196.443-.274.625a6.556 6.556 0 0 0-.547 2.422c-.39-.599-.52-1.198-.39-1.797.13-.625.3-1.106.508-1.445.338-.651.442-.925.312-.82-.182.286-.377.638-.586 1.054-.208.39-.364.82-.469 1.29a3.03 3.03 0 0 0 0 1.367c.13.442.456.833.977 1.171.026 0 .208.118.547.352.338.234.65.534.937.898.287.391.391.717.313.977-.13.26-.352.378-.664.352.208.234.39.494.547.78m10.078-.469c.026-.182-.156-.495-.547-.937a1.725 1.725 0 0 1-.313-.86c-.052-.338-.169-.599-.351-.781a1.009 1.009 0 0 0-.82-.195h-.079a1.885 1.885 0 0 1-.664.468c-.286.157-.56.209-.82.157-.469-.183-.716-.56-.742-1.133h-.04c-.26.156-.442.43-.546.82-.078.417-.13.925-.156 1.524a4.596 4.596 0 0 1-.235 1.093c-.052.157-.104.326-.156.508-.156.495-.17.964-.039 1.406.313.547.755.795 1.328.743.573-.053 1.146-.378 1.719-.977.469-.495.976-.846 1.523-1.055.547-.208.86-.468.938-.78m-10-11.094c-.104-.156-.117-.247-.04-.273a.255.255 0 0 1 .118.117c0 .026.013.052.039.078.078.078.182.17.313.274.234.234.56.364.976.39.443-.052.82-.182 1.133-.39.13-.079.273-.183.43-.313a.457.457 0 0 0 .117-.078l.117-.117c.026-.052.065-.078.117-.078.104.026.065.104-.117.234-.156.156-.352.3-.586.43a2.471 2.471 0 0 1-1.21.39c-.47-.026-.834-.156-1.095-.39l-.273-.274z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxLgIcon);
export default ForwardRef;