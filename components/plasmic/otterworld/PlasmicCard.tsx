// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jqHMejC8dcPyddaS4gmqUt
// Component: -OeynXv3MoWt

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: jqHMejC8dcPyddaS4gmqUt/projectcss
import sty from "./PlasmicCard.module.css"; // plasmic-import: -OeynXv3MoWt/css

createPlasmicElementProxy;

export type PlasmicCard__VariantMembers = {};
export type PlasmicCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicCard__VariantsArgs;
export const PlasmicCard__VariantProps = new Array<VariantPropType>();

export type PlasmicCard__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCard__ArgsType;
export const PlasmicCard__ArgProps = new Array<ArgPropType>("children");

export type PlasmicCard__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultCardProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCard__RenderFunc(props: {
  variants: PlasmicCard__VariantsArgs;
  args: PlasmicCard__ArgsType;
  overrides: PlasmicCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__cUeyJ)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/otterworld/images/dalle20240523160434AVibrantAndPlayfulIllustrationOfAGameStageInAnOtterWorldDepictingCryptoStorageWalletsTheSceneFeaturesAnOtterCharacterHappilyWebp.webp",
                fullWidth: 1024,
                fullHeight: 1792,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCard__VariantsArgs;
    args?: PlasmicCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCard__ArgProps,
          internalVariantPropNames: PlasmicCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCard";
  } else {
    func.displayName = `PlasmicCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCard = Object.assign(
  // Top-level PlasmicCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCard
    internalVariantProps: PlasmicCard__VariantProps,
    internalArgProps: PlasmicCard__ArgProps
  }
);

export default PlasmicCard;
/* prettier-ignore-end */
