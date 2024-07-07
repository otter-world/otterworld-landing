// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jqHMejC8dcPyddaS4gmqUt
// Component: 8uRuDIsw_Axd

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

import { PlasmicHead } from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";

import { useScreenVariants as useScreenVariantsv6JzT4AzP0Fn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: v6jzT4azP0Fn/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: jqHMejC8dcPyddaS4gmqUt/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 8uRuDIsw_Axd/css

import Twitter2SvgrepoComsvgIcon from "./icons/PlasmicIcon__Twitter2SvgrepoComsvg"; // plasmic-import: cV4cuMllBGg8/icon
import TelegramSvgrepoComsvgIcon from "./icons/PlasmicIcon__TelegramSvgrepoComsvg"; // plasmic-import: p8ya4hJMYEbR/icon
import GitbookSvgrepoComsvgIcon from "./icons/PlasmicIcon__GitbookSvgrepoComsvg"; // plasmic-import: 5vLE0s1yfrCg/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
  navigationBar?: Flex__<typeof NavigationBar>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsv6JzT4AzP0Fn()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={
              "Otter World is a comprehensive DeFi platform integrating cutting-edge technology and AI to provide a seamless and secure experience. Join us and be a part of our vibrant community!"
            }
            image={"/plasmic/otterworld/images/otterwalletpng.png"}
            title={"Otter World"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__eo8H0)}>
            <div className={classNames(projectcss.all, sty.freeBox__rGyS7)}>
              <NavigationBar
                data-plasmic-name={"navigationBar"}
                data-plasmic-override={overrides.navigationBar}
                brand={
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__kugtq
                    )}
                    component={Link}
                    href={"#"}
                    platform={"nextjs"}
                  >
                    <PlasmicImg__
                      alt={"otter logo"}
                      className={classNames(sty.img__z2Kzs)}
                      displayHeight={"40px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/otterworld/images/group52Png.png",
                        fullWidth: 1302,
                        fullHeight: 315,
                        aspectRatio: undefined
                      }}
                    />
                  </PlasmicLink__>
                }
                className={classNames("__wab_instance", sty.navigationBar)}
                closeButton={
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___8AfW)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={"https://static1.plasmic.app/close.svg"}
                  />
                }
                itemsGap={24}
                menuItems={
                  <React.Fragment>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__sW0DJ
                      )}
                      component={Link}
                      href={"/"}
                      platform={"nextjs"}
                    >
                      <Twitter2SvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__upSgn)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link___8Q603
                      )}
                      component={Link}
                      href={"/"}
                      platform={"nextjs"}
                    >
                      <TelegramSvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__fSkf4)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__aAOl2
                      )}
                      component={Link}
                      href={"/"}
                      platform={"nextjs"}
                    >
                      <GitbookSvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__ztyoT)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                  </React.Fragment>
                }
                openButton={
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___2Ee0E)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={"https://static1.plasmic.app/menu.svg"}
                  />
                }
                responsiveBreakpoint={768}
              />
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__xWoaY)}>
            <div className={classNames(projectcss.all, sty.freeBox__qVJgR)}>
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__d8Ckf
                )}
              >
                {"Welcome to Otterworld"}
              </h1>
              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4__hvIov
                )}
              >
                {
                  "The fun and friendly DeFi platform where innovation meets security."
                }
              </h4>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__n5Zyj)}>
            <div className={classNames(projectcss.all, sty.columns__pm2Hj)}>
              <div className={classNames(projectcss.all, sty.column__xOouk)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__yLvab)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otterworld/images/land1Webp.webp",
                    fullWidth: 1024,
                    fullHeight: 1024,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__aFmQv)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__mcCWq
                  )}
                >
                  {"Otter World"}
                </h1>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__s80O2
                  )}
                >
                  {
                    "Otter World is a comprehensive DeFi platform integrating cutting-edge technology and AI to provide a seamless and secure experience. Join us and be a part of our vibrant community!"
                  }
                </h4>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__iwlZs
                  )}
                >
                  {
                    "Our mission is to redefine the DeFi ecosystem by making it accessible, secure, and engaging for everyone. We believe in the power of decentralization and aim to empower users by providing innovative tools and features that simplify and enhance their financial activities."
                  }
                </h4>
              </Stack__>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section___1Nyr)}>
            <div className={classNames(projectcss.all, sty.freeBox__bejzL)}>
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1___2Tkk8
                )}
              >
                {"Otter Kingdom"}
              </h1>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___7VoMb)}
            >
              <div className={classNames(projectcss.all, sty.column___6PRnW)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___98Ncn)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otterworld/images/otterwalletpng2.png",
                    fullWidth: 1024,
                    fullHeight: 1024,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__kVvNn)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__j0QDu
                  )}
                >
                  {"Otter Wallet: Your DeFi Gateway"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e2Cbf
                  )}
                >
                  {
                    "The cornerstone of our ecosystem, Otter Wallet, offers a secure and user-friendly interface for managing your digital assets. With advanced security protocols and seamless integration with other DeFi services"
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5Ynu
                  )}
                >
                  {
                    "\ud83d\udda5\ufe0f User-Friendly Interface\n\ud83d\udd04 Built-In Swap\n\ud83d\udcca Portfolio Management"
                  }
                </div>
              </Stack__>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__ibUau)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__zLmy)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__qZiLa
                  )}
                >
                  {"Otter Guard: AI-Based Security"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__roMaN
                  )}
                >
                  {
                    "Our AI-powered security solution, Otter Guard, provides real-time protection for your assets. By continuously monitoring transactions and assessing potential threats, Otter Guard ensures a secure environment for all your DeFi activities"
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zxb9I
                  )}
                >
                  {
                    "\ud83d\udee1\ufe0f Advanced Threat Detection\n\ud83d\udd0d Smart Contract Auditing\n\ud83d\udee1\ufe0f Asset Protection"
                  }
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.column__jvLvO)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__vpspT)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otterworld/images/otterAIpng.png",
                    fullWidth: 1024,
                    fullHeight: 1024,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__usOmo)}
            >
              <div className={classNames(projectcss.all, sty.column__rs9Z6)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__bp5V)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otterworld/images/otterchestpng.png",
                    fullWidth: 1024,
                    fullHeight: 1024,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__eMtVb)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__evmF0
                  )}
                >
                  {"Otter Chest"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__w8RAb
                  )}
                >
                  {"Instant asset swapping directly from the wallet."}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hHeJm
                  )}
                >
                  {
                    "\u26a1 Effortless Asset Interchange\n\ud83d\udd04 Universal Token Compatibility\n\ud83d\udcb8 Cost-Effective Transactions"
                  }
                </div>
              </Stack__>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__dHqsF)}>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__gcyTs
              )}
            >
              {"Our Roadmap"}
            </h1>
            <div className={classNames(projectcss.all, sty.freeBox__wM2No)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__q3Ckc)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/otterworld/images/maps1Minpng.png",
                  fullWidth: 1024,
                  fullHeight: 1821,
                  aspectRatio: undefined
                }}
              />
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__vxmSq)}>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__wgSpk
              )}
            >
              {"Our Partner"}
            </h1>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cvZqd)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__uLla)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/otterworld/images/placeholderLogo1Png.png",
                  fullWidth: 260,
                  fullHeight: 123,
                  aspectRatio: undefined
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__pG1Wo)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/otterworld/images/placeholderLogo1Png.png",
                  fullWidth: 260,
                  fullHeight: 123,
                  aspectRatio: undefined
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__gfbMw)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/otterworld/images/placeholderLogo1Png.png",
                  fullWidth: 260,
                  fullHeight: 123,
                  aspectRatio: undefined
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___7I2B)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/otterworld/images/placeholderLogo1Png.png",
                  fullWidth: 260,
                  fullHeight: 123,
                  aspectRatio: undefined
                }}
              />
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__rAa1L)}>
            <div className={classNames(projectcss.all, sty.freeBox__vbJ7Y)}>
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__zfB
                )}
              >
                {"Lets Join & Start today"}
              </h1>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__sFQn)}
                displayHeight={"150px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/otterworld/images/buttonappspng.png",
                  fullWidth: 1170,
                  fullHeight: 360,
                  aspectRatio: undefined
                }}
              />
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__vveD9)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__p2Am4
              )}
            >
              {"Contact: admin@otterworld.com |  DeFi City, Otter World"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kjFiM
              )}
            >
              {"\u00a9 2024 Otter World. All rights reserved."}
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageMetadataOverride", "navigationBar"],
  pageMetadataOverride: ["pageMetadataOverride"],
  navigationBar: ["navigationBar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageMetadataOverride: typeof PlasmicHead;
  navigationBar: typeof NavigationBar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),
    navigationBar: makeNodeComponent("navigationBar"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
